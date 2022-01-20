import React from "react";
import { Input, Button } from 'antd';
import style from "./style.module.scss";
import commonStyle from "../style.module.scss";

const List = (props) => {
    const { attributes = {} } = props;

    return (
        <div className={commonStyle.wrapper}>
            <Button type="primary"  className={style.addItem}>增加列表项</Button>
            <div className={style.area}>
                <div className={style.row}>
                    <span className={style.label}>标题</span>
                    <Input
                        // value={title}
                        className={style.content}
                        placeholder="请输入列表项标题"
                        // onChange={e => changeAttributes({ title: e.target.value })}
                    />
                </div>
                <div className={style.row}>
                    <span className={style.label}>描述</span>
                    <Input
                        // value={backgroundUrl}
                        className={style.content}
                        placeholder="请输入列表项描述"
                        // onChange={e => changeAttributes({ backgroundUrl: e.target.value })}
                    />
                </div>
                <div className={style.row}>
                    <span className={style.label}>图片</span>
                    <Input
                        // value={backgroundHeight}
                        className={style.content}
                        placeholder="请输入列表项图片路径"
                        // onChange={e => changeAttributes({ backgroundHeight: e.target.value })}
                    />
                </div>
                <div className={style.row}>
                    <span className={style.label}>跳转路径</span>
                    <Input
                        // value={backgroundHeight}
                        className={style.content}
                        placeholder="请输入列表项跳转路径"
                        // onChange={e => changeAttributes({ backgroundHeight: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
}

export default List;
