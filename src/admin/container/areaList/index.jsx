import React, { useState } from "react";
import { Button } from 'antd';
import style from "./style.module.scss";

const AreaList = () => {
    const [list, setList] = useState([]);
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

    const handleSaveButton = () => {
        console.log("save")
    }

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
            <Button className={style.save} type="primary" onClick={handleSaveButton}>保存区块配置</Button>
        </div>
    );
}

export default AreaList;
