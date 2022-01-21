import React from "react";
import { Input, Switch } from 'antd';
import style from "./style.module.scss";

const { TextArea } = Input;

const Banner = (props) => {
    const { attributes = {}, changeAttributes } = props;
    const { title, description, showSmallPic, smallPicUrl, backgroundUrl, backgroundHeight } = attributes;

    const handleShowSmallPic = (checked) => {
        !checked
            ? changeAttributes({ smallPicUrl: "",  showSmallPic: checked })
            : changeAttributes({ showSmallPic: checked });
    }

    return (
        <div className={style.wrapper}>
            <div className={style.row}>
                <span className={style.label}>页面标题</span>
                <Input
                    value={title}
                    className={style.content}
                    placeholder="请输入页面标题"
                    onChange={e => changeAttributes({ title: e.target.value })}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>页面描述</span>
                <TextArea
                    value={description}
                    className={style.content}
                    rows={2}
                    placeholder="请输入页面描述"
                    onChange={e => changeAttributes({ description: e.target.value })}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>显示小图</span>
                <Switch checked={showSmallPic} onChange={handleShowSmallPic} />
            </div>
            {
                showSmallPic
                    ? (<div className={style.row}>
                        <span className={style.label}>小图路径</span>
                        <Input
                            value={smallPicUrl}
                            className={style.content}
                            placeholder="请输入页面小图 URL"
                            onChange={e => changeAttributes({ smallPicUrl: e.target.value })}
                        />
                       </div>)
                    : null
            }
            <div className={style.row}>
                <span className={style.label}>背景图片路径</span>
                <Input
                    value={backgroundUrl}
                    className={style.content}
                    placeholder="请输入页面背景图片 URL"
                    onChange={e => changeAttributes({ backgroundUrl: e.target.value })}
                />
            </div>
            <div className={style.row}>
                <span className={style.label}>背景图片高度</span>
                <Input
                    value={backgroundHeight}
                    className={style.content}
                    placeholder="请输入页面背景图片高度"
                    onChange={e => changeAttributes({ backgroundHeight: e.target.value })}
                />
            </div>
        </div>
    );
}

export default Banner;
