import { parseDataFromString } from "../../../common/util";
import List from "./component/List";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import {Helmet} from "react-helmet";

const pageSchema = parseDataFromString(window.localStorage.schema, {});
const {  children = [], attributes = {} } = pageSchema;
const { title } = attributes;

const map = { Banner, List, Footer };

const render = (item, index) => {
    const Component = map[item.name];
    return Component ? <Component key={index} schema={item} /> : null;
}

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
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
