import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Button } from 'antd';
import style from "./style.module.scss";

const AreaList = (props, ref) => {
    const [children, setChildren] = useState(props.children);
    const handleAddButton = () => {
        const newChildren = [...children];
        newChildren.push({});
        setChildren(newChildren);
    }

    const handleDeleteButton = (index) => {
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
                        <li className={style.item} key={index}>
                            <span className={style.content}>当前区块内容为空</span>
                            <span>
                                <Button size="small" type="dashed" danger onClick={() => handleDeleteButton(index)}>删除</Button>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <Button type="primary" ghost onClick={handleAddButton}>新增页面区块</Button>
        </div>
    );
}

export default forwardRef(AreaList);
