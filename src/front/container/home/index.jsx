import Banner from "./component/Banner/";
import Courses from "./component/Courses/";
import Footer from "./component/Footer";
import { parseDataFromString } from "../../../common/util"

const schema = parseDataFromString(window.localStorage.schema);
const listData = [...schema?.children].splice(3);

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <Footer />
            {
                listData.map((item, index) => (
                    <div className="wrapper" key={index}>area</div>
                ))
            }
        </div>
    );
}

export default Home;
