import style from "./style.module.scss";

const Banner = () => {
    return (
        <div className={style.banner}>
            <img className={style.bannerImg} src="https://serverless-learning-static-files.oss-cn-beijing.aliyuncs.com/images/timg.jpg" alt="" />
            <div className={style.person}>
                <img className={style.avatar} src="https://serverless-learning-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg" alt="" />
                <div className={style.info}>
                    <div className={style.title}>Robin 的个人小站</div>
                    <div className={style.description}>低代码+云原生” ，已然成为大厂全栈解决方案新宠！本课程中，将结合最新实践经验，以个人博客的开发为例，带领大家从解决问题角度出发，通过 “ 前端配置化+后端 Serverless” 全流程实践，助你先人一步把握技术新潮流，获取中大厂高薪人才必备的 “硬核” 技能！</div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
