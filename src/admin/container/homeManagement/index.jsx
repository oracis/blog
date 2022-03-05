import React, { Fragment } from "react";
import { Button } from 'antd';
import style from "./style.module.scss";
import AreaList from "./component/areaList";
import { parseDataFromString } from "../../../common/util";
import { useSchemaData } from "../../hook/useSchemaData";
import request from "../../../common/request";

const HomeManagement = () => {
    const { schema, changeSchema } = useSchemaData();

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
    };

    return (
        <Fragment>
            <AreaList children={schema.children || []} />
            <div className={style.buttons}>
                <Button type="primary" onClick={handleSaveButton}>保存区块配置</Button>
                <Button className={style.reset} type="primary" onClick={handleResetButton}>重置区块配置</Button>
            </div>
        </Fragment>
    );
}

export default HomeManagement;
