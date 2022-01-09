import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Button } from 'antd';
import style from "./style.module.scss";
import { parseDataFromString } from "../../../common/util"

const schema = parseDataFromString(window.localStorage.schema);

const listData = [...schema?.children].splice(3);

console.log(listData)

console.log(schema, "schema")

const AreaList = (props, ref) => {
    const [list, setList] = useState(listData);
    const handleAddButton = () => {
        const newList = [...list];
        newList.push({});
        setList(newList);
    }

    const handleDeleteButton = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    useImperativeHandle(ref, () => ({
        list
    }));

    return (
        <div>
            <ul className={style.list}>
                {
                    list.map((item, index) => (
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
