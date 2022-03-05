import React from "react";
import { Button } from 'antd';
import { SortableContainer } from 'react-sortable-hoc';
import AreaItem from "../areaItem";
import style from "./style.module.scss";
import {useSchemaData} from "../../../../hook/useSchemaData";

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
    const { children, addChild, changePosition } = useSchemaData();

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
