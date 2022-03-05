import React, { Fragment } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button } from 'antd';
import style from "./style.module.scss";
import AreaList from "./component/areaList";
import { parseDataFromString } from "../../../common/util";
import { getChangeSchemaAction } from "../../store/action";

const useStore = () => {
    const dispatch = useDispatch();
    const schema = useSelector(state => state.common.schema);
    const changeSchema = value => {
        dispatch(getChangeSchemaAction(value));
    }
    return { schema, changeSchema };
};

const HomeManagement = () => {
    const { schema, changeSchema } = useStore();

    const handleSaveButton = () => {
        const { token } = window.localStorage;
        axios.post("/api/schema/save", {
            schema: JSON.stringify(schema)
        }, {
            headers: { token }
        }).then(() => {});
    };

    const handleResetButton = () => {
        axios.get("/api/schema/getLastOne")
            .then(result => {
                const data = result?.data?.data;
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
