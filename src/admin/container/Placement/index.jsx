import React, {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { initAuthClient, getAuthClient } from "@authing/react-ui-components";
import style from "./style.module.scss";
import HomeManagement from "../homeManagement";
import BasicSetting from "../BasicSetting";
import Login from "../login";
import { parseDataFromString } from "../../../common/util";
import { useSchemaData } from "../../hook/useSchemaData";
import request from "../../../common/request";
import { getLoginStatus, removeLoginData } from "../../utils/login";

const { Header, Sider, Content } = Layout;

initAuthClient({
    appId: "6221f49890de06adf15c9b6f"
});

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
};

const Placement = () => {
    const { collapsed, toggle } = useCollapsed();
    const { changeSchema } = useSchemaData();
    const handleHomePageRedirect = () => window.location.href="/";
    const isLogin = getLoginStatus();
    const photo = window.localStorage.photo;

    const handleLogout = (event) => {
        event.preventDefault();
        getAuthClient().logout();
        removeLoginData();
        window.location.reload();
    };

    useEffect(() => {
        request.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data;
                const currentSchema = parseDataFromString(data.schema, {});
                changeSchema(currentSchema);
            });
    }, [])

    return isLogin ? (
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
                    <img className={style.avatar} src={photo} alt="" onClick={handleLogout}/>
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
};

export default Placement;
