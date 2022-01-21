import style from "./style.module.scss";

const Banner = ({ schema }) => {
    const { attributes = {}, children = [] } = schema;
    const { copyright, record } = attributes;
    return (
        <div className="wrapper">
            <div className={style.footer}>
               <ul className={style.list}>
                   {
                       children.map(({ attributes: { title, link } = {} }, index) => (
                           <li className={style.item} key={index}>
                               <a className={style.link} href={link} target="_blank" rel="noreferrer">{title}</a>
                           </li>
                       ))
                   }
               </ul>
                <div className={style.copyright}>
                    <span>{copyright}</span>
                    <span className={style.record}>{record}</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
