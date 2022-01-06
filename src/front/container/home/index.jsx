import Banner from "./component/Banner/";
import Courses from "./component/Courses/";
import Footer from "./component/Footer";
import { getDataFromString } from "../../../common/util"

const listData = getDataFromString(window.localStorage.homeData);

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
