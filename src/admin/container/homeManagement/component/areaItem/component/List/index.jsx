import React from "react";
import { Input, Button } from 'antd';
import style from "./style.module.scss";
import commonStyle from "../style.module.scss";

const List = (props) => {
    const { children = [], addChild, deleteChild } = props;

    return (
        <div className={commonStyle.wrapper}>
            <Button type="primary"  className={style.addItem} onClick={addChild}>增加列表项</Button>
            {
                children.map((child, index) => (
                    <div className={style.area} key={index}>
                        <div className={style.delete} onClick={() => deleteChild(index)}>X</div>
                        <div className={style.row}>
                            <span className={style.label}>标题</span>
                            <Input
                                value={child.title}
                                className={style.content}
                                placeholder="请输入列表项标题"
                                // onChange={e => changeAttributes({ title: e.target.value })}
                            />
                        </div>
                        <div className={style.row}>
                            <span className={style.label}>描述</span>
                            <Input
                                value={child.description}
                                className={style.content}
                                placeholder="请输入列表项描述"
                                // onChange={e => changeAttributes({ backgroundUrl: e.target.value })}
                            />
                        </div>
                        <div className={style.row}>
                            <span className={style.label}>图片</span>
                            <Input
                                value={child.imageUrl}
                                className={style.content}
                                placeholder="请输入列表项图片路径"
                                // onChange={e => changeAttributes({ backgroundHeight: e.target.value })}
                            />
                        </div>
                        <div className={style.row}>
                            <span className={style.label}>跳转路径</span>
                            <Input
                                value={child.link}
                                className={style.content}
                                placeholder="请输入列表项跳转路径"
                                // onChange={e => changeAttributes({ backgroundHeight: e.target.value })}
                            />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default List;
