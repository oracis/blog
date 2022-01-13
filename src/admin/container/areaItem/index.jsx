import React, {useState, forwardRef, useImperativeHandle, useEffect} from 'react';
import { Modal, Button, Select } from 'antd';
import style from "./style.module.scss";

const { Option } = Select;

const SELECT_OPTIONS = { Banner: "Banner 组件", List: "List 组件", Footer: "Footer 组件" };

const AreaItem = (props, ref) => {
    const { index, item, removeItemFromChildren } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [itemSchema, setItemSchema] = useState(item);
    const [tempItemSchema, setTempItemSchema] = useState(item);

    useImperativeHandle(ref, () => ({
        getItemSchema: () => {
            return itemSchema;
        }
    }));

    useEffect(() => {
        setItemSchema(item);
        setTempItemSchema(item);
    }, [item]);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleModalConfirm = () => {
        setIsModalVisible(false);
        setItemSchema(tempItemSchema);
    }

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setTempItemSchema(itemSchema);
    }

    const handleSelectorChange = (value) => {
        const schema = { name: value, attributes: {}, children: [] };
        setTempItemSchema(schema);
    }

    return (
        <li className={style.item} key={index}>
            <span className={style.content} onClick={showModal}>{itemSchema.name ? itemSchema.name + " 组件" : "当前区块内容为空"}</span>
            <span>
                <Button size="small" type="dashed" danger onClick={() => removeItemFromChildren(index)}>删除</Button>
            </span>

            <Modal title="组件选择" visible={isModalVisible} cancelText="取消" okText="确认" onOk={handleModalConfirm} onCancel={handleModalCancel}>
                <Select value={tempItemSchema.name} onChange={handleSelectorChange}>
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

export default forwardRef(AreaItem);
