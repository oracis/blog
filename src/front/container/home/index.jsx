import axios from "axios";
import { useEffect, useState } from "react";
import { parseDataFromString } from "../../../common/util";
import List from "./component/List";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import { Helmet } from "react-helmet";

const map = { Banner, List, Footer };

const render = (item, index) => {
    const Component = map[item.name];
    return Component ? <Component key={index} schema={item} /> : null;
}

const Home = () => {
    const [children, setChildren] = useState([]);
    const [attributes, setAttributes] = useState({});

    useEffect(() => {
        axios.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data?.data;
                const pageSchema = parseDataFromString(data.schema, {});
                const {  children = [], attributes = {} } = pageSchema;
                setChildren(children);
                setAttributes(attributes);
            });
    }, []);
    return (
        <div>
            <Helmet>
                <title>{attributes.title}</title>
            </Helmet>
            {
                children.map((item, index) => (
                    render(item, index)
                ))
            }
        </div>
    );
}

export default Home;
