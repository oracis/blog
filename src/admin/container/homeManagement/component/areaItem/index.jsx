import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SortableElement } from 'react-sortable-hoc';
import _ from "lodash";
import { getChangeItemFromChildrenAction, getDeleteItemFromChildrenAction } from "../../../../store/action";
import { Modal, Button, Select } from 'antd';
import Banner from "./component/Banner";
import List from "./component/List";
import Footer from "./component/Footer";
import style from "./style.module.scss";

const { Option } = Select;
const SELECT_OPTIONS = { Banner: "Banner 组件", List: "List 组件", Footer: "Footer 组件" };

const map = { Banner, List, Footer };

const useChild = (index) => {
    const dispatch = useDispatch();
    const pageChild = useSelector(state => state.common.schema.children?.[index] || {});
    const changePageChild = (index, child) => dispatch(getChangeItemFromChildrenAction(index, child));
    const removePageChild = index => dispatch(getDeleteItemFromChildrenAction(index));
    return { pageChild, changePageChild, removePageChild };
}

const AreaItem = (props) => {
    const { value: index } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { pageChild, changePageChild, removePageChild } = useChild(index);
    const [tempItem, setTempItem] = useState(_.cloneDeep(pageChild));

    useEffect(() => {
        setTempItem(_.cloneDeep(pageChild));
    }, [pageChild])

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleModalConfirm = () => {
        setIsModalVisible(false);
        changePageChild(index, tempItem);
    }

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setTempItem(_.cloneDeep(pageChild));
    }

    const handleSelectorChange = value => setTempItem({ name: value, attributes: {}, children: [] });

    const removeItemFromChildren = () => removePageChild(index);

    const changeTempItemAttributes = (attributesObj) => {
        const newTemp = { ...tempItem };
        for (let [key, value] of Object.entries(attributesObj)) {
            newTemp.attributes[key] = value;
        }
        setTempItem(newTemp);
    }

    const addChildToTempItemChildren = () => {
        const newTemp = { ...tempItem };
        let attributes = {
            title: "",
            description: "",
            imageUrl: "",
            link: ""
        };
        if (newTemp.name === "Footer") {
            attributes = {
                title: "",
                link: ""
            };
        }
        newTemp.children.push({
            name: "Item",
            attributes,
            children: []
        });
        setTempItem(newTemp);
    }

    const deleteChildToTempItemChildren = (index) => {
        const newTemp = { ...tempItem };
        newTemp.children.splice(index, 1);
        setTempItem(newTemp);
    }

    const changeChildAttributesToTempItemChildren = (index, key, value) => {
        const newChild = { ...tempItem.children[index] };
        newChild.attributes[key] = value;
        const newTemp = { ...tempItem };
        newTemp.children.splice(index, 1, newChild);
        setTempItem(newTemp);
    }

    const getComponent = () => {
        const { name } = tempItem;
        const Component = map[name];
        return Component
            ? <Component
                {...tempItem}
                changeAttributes={changeTempItemAttributes}
                addChild={addChildToTempItemChildren}
                deleteChild={deleteChildToTempItemChildren}
                changeChildAttributes={changeChildAttributesToTempItemChildren}
              />
            : null;
    }

    return (
        <li className={style.item} key={index}>
            <span className={style.content} onClick={showModal}>{pageChild.name ? pageChild.name + " 组件" : "当前区块内容为空"}</span>
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
                {
                    getComponent()
                }
            </Modal>
        </li>
    );
}

export default SortableElement(AreaItem);
