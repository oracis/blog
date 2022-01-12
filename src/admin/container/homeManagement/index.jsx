import React, { useState, useRef } from "react";
import { Button, Layout, Menu } from 'antd';
import style from "./style.module.scss";
import AreaList from "../areaList";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
}

const HomeManagement = () => {
    const { collapsed, toggle } = useCollapsed();
    const handleHomePageRedirect = () => window.location.href="/";
    const areaListRef = useRef();

    const handleSaveButton = () => {

    }

    return (
        <Layout>
            <Sider className={style.sidebar} trigger={null} collapsible collapsed={collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
                    <Menu.Item key="admin-home">
                        <span className="iconfont">&#xe69b;</span>首页内容管理
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
                    <AreaList ref={areaListRef}/>
                    <div className={style.save}>
                        <Button type="primary" onClick={handleSaveButton}>保存区块配置</Button>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default HomeManagement;
