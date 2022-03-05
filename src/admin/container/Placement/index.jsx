import React, {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { Layout, Menu } from 'antd';
import style from "./style.module.scss";
import HomeManagement from "../homeManagement";
import BasicSetting from "../BasicSetting";
import Login from "../login";
import { useDispatch } from "react-redux";
import { getChangeSchemaAction } from "../../store/action";
import { parseDataFromString } from "../../../common/util";

const { Header, Sider, Content } = Layout;

const useStore = () => {
    const dispatch = useDispatch();
    const changeSchema = value => {
        dispatch(getChangeSchemaAction(value));
    }
    return { changeSchema };
};

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
}

const Placement = () => {
    const { collapsed, toggle } = useCollapsed();
    const { changeSchema } = useStore();
    const handleHomePageRedirect = () => window.location.href="/";
    const authToken = window.localStorage.token;

    useEffect(() => {
        axios.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data?.data;
                const currentSchema = parseDataFromString(data.schema, {});
                changeSchema(currentSchema);
            });
    }, [changeSchema])

    return authToken ? (
        <Layout>
            <Sider className={style.sidebar} trigger={null} collapsible collapsed={collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
                    <Menu.Item key="admin-home">
                        <Link to="/"><span className="iconfont">&#xe69b;</span>首页内容管理</Link>
                    </Menu.Item>
                    <Menu.Item key="basic-home">
                        <Link to="basic"><span className="iconfont">&#xe69b;</span>基本内容管理</Link>
                    </Menu.Item>
                    <Menu.Item key="admin-back" onClick={handleHomePageRedirect}>
                        <span className="iconfont">&#xe635;</span>返回用户首页
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className={style.header}>
                    <span className="iconfont" onClick={toggle} dangerouslySetInnerHTML={{__html: collapsed ? "&#xe62c;" : "&#xe629;"}} />
                </Header>
                <Content className={style.content}>
                    <Routes>
                        <Route path="/" element={<HomeManagement />} />
                        <Route path="/basic" element={<BasicSetting />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    ) : <Login />;
}

export default Placement;
