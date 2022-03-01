import React, { Fragment } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from 'antd';
import style from "./style.module.scss";
import { parseDataFromString } from "../../../common/util";
import { getChangeSchemaAction, getChangeSchemaAttributesAction } from "../../store/action";

const useStore = () => {
    const dispatch = useDispatch();
    const schema = useSelector(state => state.common.schema);
    const { attributes = {} } = schema;
    const changeSchema = value => {
        dispatch(getChangeSchemaAction(value));
    };
    const changeSchemaAttributes = attributesObj => {
        const newAttributes = { ...attributes };
        for (let [key, value] of Object.entries(attributesObj)) {
            newAttributes[key] = value;
        }
        dispatch(getChangeSchemaAttributesAction(newAttributes));
    }
    return { schema, changeSchema, changeSchemaAttributes };
}

const BasicSetting = () => {
    const { schema, changeSchema, changeSchemaAttributes } = useStore();
    const { attributes = {} } = schema;
    const { title = "" } = attributes;

    const changeAttributes = attributesObj => {
        changeSchemaAttributes(attributesObj);
    };

    const handleSaveButton = () => {
        axios.post("/api/schema/save", {
            schema: JSON.stringify(schema)
        }).then(() => {});
    };

    const handleResetButton = () => {
        axios.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data?.data;
                const currentSchema = parseDataFromString(data.schema, {});
                changeSchema(currentSchema);
            });
    }

    return (
        <Fragment>
            <div className={style.row}>
                <span className={style.label}>页面标题</span>
                <Input
                    value={title}
                    className={style.content}
                    placeholder="请输入页头标题"
                    onChange={e => changeAttributes({ title: e.target.value })}
                />
            </div>
            <div className={style.buttons}>
                <Button type="primary" onClick={handleSaveButton}>保存区块配置</Button>
                <Button className={style.reset} type="primary" onClick={handleResetButton}>重置区块配置</Button>
            </div>
        </Fragment>
    );
}

export default BasicSetting;
