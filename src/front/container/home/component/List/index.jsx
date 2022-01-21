import style from "./style.module.scss";

const List = ({ schema }) => {
    const { children = []} = schema;

    return (
        <div className={"wrapper"}>
            <ul className={style.list}>
                {
                    children.map(({ attributes: { title, description, imageUrl, link } = {} }, index) => (
                        <li className={style.item} key={index}>
                            <a className={style.link} href={link} target="_blank">
                                <img className={style.img} src={imageUrl} alt="" />
                                <h4 className={style.title}>{title}</h4>
                                <p className={style.desc}>{description}</p>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;
