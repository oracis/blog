import React from "react";
import {Button, Input} from 'antd';
import style from "./style.module.scss";

const Footer = (props) => {
    const { attributes = {}, changeAttributes, children = [], addChild, deleteChild, changeChildAttributes } = props;
    const { copyright, record } = attributes;

    return (
        <div className={style.wrapper}>
            <div className={style.row}>
                <span className={style.label}>版权</span>
                <Input
                    value={copyright}
                    className={style.content}
                    placeholder="请输入版权"
                    onChange={e => changeAttributes({ copyright: e.target.value })}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>备案号</span>
                <Input
                    value={record}
                    className={style.content}
                    placeholder="请输入备案号"
                    onChange={e => changeAttributes({ record: e.target.value })}
                />
            </div>
            <Button type="primary"  className={style.addItem} onClick={addChild}>增加列表项</Button>
            {
                children.map(({ attributes: { title, link } = {} }, index) => (
                    <div className={style.area} key={index}>
                        <div className={style.delete} onClick={() => deleteChild(index)}>X</div>
                        <div className={style["area-row"]}>
                            <span className={style.label}>标题</span>
                            <Input
                                value={title}
                                className={style.content}
                                placeholder="请输入列表项标题"
                                onChange={e => changeChildAttributes(index, "title", e.target.value)}
                            />
                        </div>
                        <div className={style["area-row"]}>
                            <span className={style.label}>跳转路径</span>
                            <Input
                                value={link}
                                className={style.content}
                                placeholder="请输入列表项跳转路径"
                                onChange={e => changeChildAttributes(index, "link", e.target.value)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Footer;
