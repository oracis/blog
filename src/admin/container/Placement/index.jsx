import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import style from "./style.module.scss";
import HomeManagement from "../homeManagement";
import BasicSetting from "../BasicSetting";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
}


const Placement = () => {
    const { collapsed, toggle } = useCollapsed();
    const handleHomePageRedirect = () => window.location.href="/";

    return (
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
    );
}

export default Placement;
