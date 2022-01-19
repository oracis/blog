import React from "react";
import { Input, Switch } from 'antd';
import style from "./style.module.scss";

const { TextArea } = Input;

const Banner = (props) => {
    const { attributes = {}, changeAttribute } = props;
    const { title, description, showSmallPic, smallPicUrl, backgroundUrl, backgroundHeight } = attributes;

    return (
        <div>
            <div className={style.row}>
                <span className={style.label}>页面标题</span>
                <Input
                    value={title}
                    className={style.content}
                    placeholder="请输入页面标题"
                    onChange={e => changeAttribute("title", e.target.value)}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>页面描述</span>
                <TextArea
                    value={description}
                    className={style.content}
                    rows={2}
                    placeholder="请输入页面描述"
                    onChange={e => changeAttribute("description", e.target.value)}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>显示小图</span>
                <Switch checked={showSmallPic} onChange={checked => changeAttribute("showSmallPic", checked)} />
            </div>
            <div className={style.row}>
                <span className={style.label}>小图路径</span>
                <Input
                    value={smallPicUrl}
                    className={style.content}
                    placeholder="请输入页面小图 URL"
                    onChange={e => changeAttribute("smallPicUrl", e.target.value)}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>背景图片路径</span>
                <Input
                    value={backgroundUrl}
                    className={style.content}
                    placeholder="请输入页面背景图片 URL"
                    onChange={e => changeAttribute("backgroundUrl", e.target.value)}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>背景图片高度</span>
                <Input
                    value={backgroundHeight}
                    className={style.content}
                    placeholder="请输入页面背景图片高度"
                    onChange={e => changeAttribute("backgroundHeight", e.target.value)}
                />
            </div>
        </div>
    );
}

export default Banner;
