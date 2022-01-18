import React, {useState, useImperativeHandle, forwardRef, createRef, useMemo, useEffect} from "react";
import { Button } from 'antd';
import { ReactSortable } from "react-sortablejs";
import style from "./style.module.scss";
import AreaItem from "../areaItem";

let refs = [];

const AreaList = (props, ref) => {
    const [children, setChildren] = useState(props.children);

    useEffect(() => {
        setChildren(props.children);
    }, [props.children]);

    useMemo(() => {
        refs = children.map(item => createRef());
    }, [children]);

    const addItemToChildren = () => {
        const newChildren = [...children];
        newChildren.push({});
        setChildren(newChildren);
    }

    const changeItemFromChildren = (index, item) => {
        const newChildren = [...children];
        newChildren.splice(index, 1, item);
        setChildren(newChildren);
    }

    const removeItemFromChildren = (index) => {
        const newChildren = [...children];
        newChildren.splice(index, 1);
        setChildren(newChildren);
    }

    useImperativeHandle(ref, () => ({
        getChildrenSchema: () => {
            const childrenSchema = [];
            let itemSchema;
            children.forEach((item, index) => {
                itemSchema = refs[index].current.getItemSchema();
                childrenSchema.push(itemSchema);
            });
            return childrenSchema;
        }
    }));

    return (
        <div>
            <ul className={style.list}>
                <ReactSortable list={children} setList={setChildren}>
                {
                    children.map((item, index) => (
                        <AreaItem
                            key={index}
                            index={index}
                            item={item}
                            ref={refs[index]}
                            changeItemFromChildren={changeItemFromChildren}
                            removeItemFromChildren={removeItemFromChildren} />
                    ))
                }
                </ReactSortable>
            </ul>
            <Button type="primary" ghost onClick={addItemToChildren}>新增页面区块</Button>
        </div>
    );
}

export default forwardRef(AreaList);