import React from "react";
import { Button } from 'antd';
import style from "./style.module.scss";

const AreaItem = (props) => {
    const { index, removeItemFromChildren } = props;
    return (
        <li className={style.item} key={index}>
            <span className={style.content}>当前区块内容为空</span>
            <span>
                <Button size="small" type="dashed" danger onClick={() => removeItemFromChildren(index)}>删除</Button>
            </span>
        </li>
    );
}

export default AreaItem;
