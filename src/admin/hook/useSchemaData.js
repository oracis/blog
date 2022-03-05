import { useDispatch, useSelector } from "react-redux";
import {
    getAddItemToChildrenAction,
    getChangeItemFromChildrenAction, getChangeItemPositionAction,
    getChangeSchemaAction,
    getChangeSchemaAttributesAction,
    getDeleteItemFromChildrenAction
} from "../store/action";

export const useSchemaData = (index) => {
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
    };

    const children = useSelector(state => state.common.schema?.children || []);
    const addChild = () => dispatch(getAddItemToChildrenAction());
    const changePosition = (oldIndex, newIndex) => dispatch(getChangeItemPositionAction(oldIndex, newIndex));

    const pageChild = useSelector(state => state.common.schema.children?.[index] || {});
    const changePageChild = (index, child) => dispatch(getChangeItemFromChildrenAction(index, child));
    const removePageChild = index => dispatch(getDeleteItemFromChildrenAction(index));
    return { pageChild, changePageChild, removePageChild, schema, changeSchema, changeSchemaAttributes,children, addChild, changePosition };
};
