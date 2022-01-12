import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Button } from 'antd';
import style from "./style.module.scss";
import AreaItem from "../areaItem";

const AreaList = (props, ref) => {
    const [children, setChildren] = useState(props.children);
    const addItemToChildren = () => {
        const newChildren = [...children];
        newChildren.push({});
        setChildren(newChildren);
    }

    const removeItemFromChildren = (index) => {
        const newChildren = [...children];
        newChildren.splice(index, 1);
        setChildren(newChildren);
    }

    useImperativeHandle(ref, () => ({
        children
    }));

    return (
        <div>
            <ul className={style.list}>
                {
                    children.map((item, index) => (
                        <AreaItem key={index} index={index} removeItemFromChildren={removeItemFromChildren} />
                    ))
                }
            </ul>
            <Button type="primary" ghost onClick={addItemToChildren}>新增页面区块</Button>
        </div>
    );
}

export default forwardRef(AreaList);
