import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import style from "./style.module.scss";

const { Header, Sider, Content } = Layout;

const HomeManagement = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    const handleHomePageRedirect = () => window.location.href="/";

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        首页内容管理
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={handleHomePageRedirect}>
                        返回用户首页
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {
                        collapsed
                        ? <MenuUnfoldOutlined className={`${style.trigger} ${style.anticon}`} onClick={toggle} />
                        : <MenuFoldOutlined className={`${style.trigger} ${style.anticon}`} onClick={toggle} />
                    }
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: 'calc(100vh - 112px)'
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default HomeManagement;
