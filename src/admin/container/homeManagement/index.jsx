import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Layout, Menu } from 'antd';
import style from "./style.module.scss";
import AreaList from "./component/areaList";
import { parseDataFromString } from "../../../common/util";
import { getChangeSchemaAction } from "./store/action";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return { collapsed, toggle };
}

const useStore = () => {
    const dispatch = useDispatch();
    const schema = useSelector(state => state.homeManagement.schema);
    const changeSchema = value => {
        dispatch(getChangeSchemaAction(value));
    }
    return { schema, changeSchema };
}

const HomeManagement = () => {
    const { collapsed, toggle } = useCollapsed();
    const { schema, changeSchema } = useStore();
    const handleHomePageRedirect = () => window.location.href="/";

    const handleSaveButton = () => {
        window.localStorage.schema = JSON.stringify(schema);
    }

    const handleResetButton = () => {
        const currentSchema = parseDataFromString(window.localStorage.schema);
        changeSchema(currentSchema);
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
                    <AreaList children={schema.children || []} />
                    <div className={style.buttons}>
                        <Button type="primary" onClick={handleSaveButton}>保存区块配置</Button>
                        <Button className={style.reset} type="primary" onClick={handleResetButton}>重置区块配置</Button>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default HomeManagement;
