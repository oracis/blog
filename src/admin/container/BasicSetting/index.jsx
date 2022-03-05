import React, { Fragment } from "react";
import { Button, Input } from 'antd';
import style from "./style.module.scss";
import { parseDataFromString } from "../../../common/util";
import { useSchemaData } from "../../hook/useSchemaData";
import request from "../../../common/request";

const BasicSetting = () => {
    const { schema, changeSchema, changeSchemaAttributes } = useSchemaData();
    const { attributes = {} } = schema;
    const { title = "" } = attributes;

    const changeAttributes = attributesObj => {
        changeSchemaAttributes(attributesObj);
    };

    const handleSaveButton = () => {
        const { token } = window.localStorage;
        request.post("/api/schema/save", {
            schema: JSON.stringify(schema)
        }).then(() => {});
    };

    const handleResetButton = () => {
        request.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data;
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
