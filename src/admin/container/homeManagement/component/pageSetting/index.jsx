import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Input } from 'antd';
import style from "./style.module.scss";

const { TextArea } = Input;

const PageSetting = (props, ref) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        title,
        description
    }))

    return (
        <div>
            <div className={style.row}>
                <span className={style.label}>页面标题</span>
                <Input
                    value={title}
                    className={style.content}
                    placeholder="请输入页面标题"
                    onChange={handleTitleChange}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>页面描述</span>
               <TextArea
                   value={description}
                   className={style.content}
                   rows={2}
                   placeholder="请输入页面描述"
                   onChange={handleDescriptionChange}
               />
            </div>
        </div>
    );
}

export default forwardRef(PageSetting);
