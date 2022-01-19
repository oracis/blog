import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getChangeItemFromChildrenAction, getDeleteItemFromChildrenAction } from "../../store/action";
import { Modal, Button, Select } from 'antd';
import style from "./style.module.scss";

const { Option } = Select;
const SELECT_OPTIONS = { Banner: "Banner 组件", List: "List 组件", Footer: "Footer 组件" };

const AreaItem = (props) => {
    const dispatch = useDispatch();
    const { index } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const itemSchema = useSelector(state => state.homeManagement.schema.children?.[index]);
    const [tempItem, setTempItem] = useState(itemSchema);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleModalConfirm = () => {
        setIsModalVisible(false);
        dispatch(getChangeItemFromChildrenAction(index, tempItem));
    }

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setTempItem(itemSchema);
    }

    const handleSelectorChange = (value) => {
        const schema = { name: value, attributes: {}, children: [] };
        setTempItem(schema);
    }

    const removeItemFromChildren = () => {
        dispatch(getDeleteItemFromChildrenAction(index));
    }

    return (
        <li className={style.item} key={index}>
            <span className={style.content} onClick={showModal}>{itemSchema.name ? itemSchema.name + " 组件" : "当前区块内容为空"}</span>
            <span>
                <Button size="small" type="dashed" danger onClick={removeItemFromChildren}>删除</Button>
            </span>

            <Modal title="组件选择" visible={isModalVisible} cancelText="取消" okText="确认" onOk={handleModalConfirm} onCancel={handleModalCancel}>
                <Select value={tempItem.name} onChange={handleSelectorChange}>
                    {
                        Object.keys(SELECT_OPTIONS).map(key => (
                            <Option value={key} key={key}>{SELECT_OPTIONS[key]}</Option>
                        ))
                    }
                </Select>
            </Modal>
        </li>
    );
}

export default AreaItem;
