import React from "react";
import { Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getAddItemToChildrenAction } from "../../store/action";
import AreaItem from "../areaItem";
import style from "./style.module.scss";

const useChildren = () => {
    const dispatch = useDispatch();
    const children = useSelector(state => state.homeManagement.schema?.children || []);
    const addChild = () => dispatch(getAddItemToChildrenAction());
    return { children, addChild };
}

const AreaList = () => {
    const { children, addChild } = useChildren();

    const addItemToChildren = () => addChild();

    return (
        <div>
            <ul className={style.list}>
                {
                    children.map((item, index) => (
                        <AreaItem key={index} index={index}/>
                    ))
                }
            </ul>
            <Button type="primary" ghost onClick={addItemToChildren}>新增页面区块</Button>
        </div>
    );
}

export default AreaList;
