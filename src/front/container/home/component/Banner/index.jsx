import style from "./style.module.scss";

const Banner = ({ schema }) => {
    const { attributes = {} } = schema;
    const { title, description, showSmallPic, smallPicUrl, backgroundUrl, backgroundHeight } = attributes;

    const styleObj = backgroundHeight ? { height: backgroundHeight + "px" } : {};

    return (
        <div className="wrapper">
            <div className={style.banner}>
                <img className={style.bannerImg} src={backgroundUrl} style={styleObj} alt="" />
                <div className={style.person}>
                    {
                        (showSmallPic && smallPicUrl)
                            ? <img className={style.avatar} src={smallPicUrl} alt="" />
                            : null
                    }
                    <div className={style.info}>
                        <div className={style.title}>{title}</div>
                        <div className={style.description}>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
