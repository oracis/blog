import React, { useState, useRef } from "react";
import {Button, Layout, Menu} from 'antd';
import style from "./style.module.scss";
import AreaList from "../areaList";
import PageSetting from "../pageSetting";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
}

const HomeManagement = () => {
    const { collapsed, toggle } = useCollapsed();
    const handleHomePageRedirect = () => window.location.href="/";
    const pageSettingRef = useRef();
    const areaListRef = useRef();

    const handleSaveButton = () => {
        const schema = {
            name: "page",
            attributes: {},
            children: [
                {
                    name: "Banner",
                    attributes: {
                        title: "",
                        description: ""
                    },
                    children: []
                },
                {
                    name: "CoursesList",
                    attributes: {},
                    children: []
                },
                {
                    name: "Footer",
                    attributes: {},
                    children: []
                }
            ]
        };

        schema.children[0].attributes.title = pageSettingRef.current.title;
        schema.children[0].attributes.description = pageSettingRef.current.description;

        areaListRef.current.list.forEach(item => {
            schema.children.push({
                name: "area",
                    attributes: {},
                children: []
            });
        });
        window.localStorage.schema = JSON.stringify(schema);
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
                    <PageSetting ref={pageSettingRef}/>
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
