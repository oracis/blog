import React from "react";
import { Input, Button } from 'antd';
import style from "./style.module.scss";

const { TextArea } = Input;

const List = (props) => {
    const { children = [], addChild, deleteChild, changeChildAttributes } = props;

    return (
        <div className={style.wrapper}>
            <Button type="primary"  className={style.addItem} onClick={addChild}>增加列表项</Button>
            {
                children.map(({ attributes: { title, description, imageUrl, link } = {} }, index) => (
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
                            <span className={style.label}>描述</span>
                            <TextArea
                                value={description}
                                className={style.content}
                                rows={2}
                                placeholder="请输入列表项描述"
                                onChange={e => changeChildAttributes(index, "description", e.target.value)}
                            />
                        </div>
                        <div className={style["area-row"]}>
                            <span className={style.label}>图片</span>
                            <Input
                                value={imageUrl}
                                className={style.content}
                                placeholder="请输入列表项图片路径"
                                onChange={e => changeChildAttributes(index, "imageUrl", e.target.value)}
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

export default List;
