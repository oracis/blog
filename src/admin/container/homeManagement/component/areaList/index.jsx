import React from "react";
import { Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { SortableContainer } from 'react-sortable-hoc';
import { getAddItemToChildrenAction, getChangeItemPositionAction } from "../../store/action";
import AreaItem from "../areaItem";
import style from "./style.module.scss";

const useChildren = () => {
    const dispatch = useDispatch();
    const children = useSelector(state => state.homeManagement.schema?.children || []);
    const addChild = () => dispatch(getAddItemToChildrenAction());
    const changePosition = (oldIndex, newIndex) => dispatch(getChangeItemPositionAction(oldIndex, newIndex));
    return { children, addChild, changePosition };
}

const SortableList = SortableContainer(({items}) => {
    return (
        <ul className={style.list}>
            {
                items.map((item, index) => (
                    <AreaItem key={index} index={index} value={index} />
                ))
            }
        </ul>
    );
});

const AreaList = () => {
    const { children, addChild, changePosition } = useChildren();

    const addItemToChildren = () => addChild();

    const onSortEnd = ({ oldIndex, newIndex }) => changePosition(oldIndex, newIndex);

    return (
        <div>
            <SortableList distance={5} lockAxis="y" items={children} onSortEnd={onSortEnd} />
            <Button type="primary" ghost onClick={addItemToChildren}>新增页面区块</Button>
        </div>
    );
}

export default AreaList;
