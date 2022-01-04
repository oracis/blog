import style from "./style.module.scss";

const Banner = () => {
    return (
        <div className={style.footer}>
           <ul className={style.list}>
               <li className={style.item}>
                   <a className={style.link} href="./admin.html">进入管理页面</a>
               </li>
           </ul>
        </div>
    );
}

export default Banner;
