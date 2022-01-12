import React, { useState } from 'react';
import { Modal, Button, Select } from 'antd';
import style from "./style.module.scss";

const { Option } = Select;

const AreaItem = (props) => {
    const { index, item, removeItemFromChildren, changeItemFromChildren } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [itemSchema, setItemSchema] = useState(item);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleModalConfirm = () => {
        setIsModalVisible(false);
        changeItemFromChildren(index, itemSchema);
    }

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setItemSchema(item);
    }

    const handleSelectorChange = (value) => {
        const schema = { name: value, attributes: {}, children: [] };
        setItemSchema(schema);
    }

    return (
        <li className={style.item} key={index}>
            <span className={style.content} onClick={showModal}>当前区块内容为空</span>
            <span>
                <Button size="small" type="dashed" danger onClick={() => removeItemFromChildren(index)}>删除</Button>
            </span>

            <Modal title="组件选择" visible={isModalVisible} cancelText="取消" okText="确认" onOk={handleModalConfirm} onCancel={handleModalCancel}>
                <Select onChange={handleSelectorChange}>
                    <Option value="Banner">Banner 组件</Option>
                    <Option value="List">List 组件</Option>
                    <Option value="Footer">Footer 组件</Option>
                </Select>
            </Modal>
        }
        </li>
    );
}

export default AreaItem;
