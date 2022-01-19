import { ADD_PAGE_ITEM, CHANGE_SCHEMA, CHANGE_PAGE_ITEM, DELETE_PAGE_ITEM, CHANGE_PAGE_ITEM_POSITION } from "./constant";

export const getChangeSchemaAction = value => ({ type: CHANGE_SCHEMA, value });

export const getAddItemToChildrenAction = () => ({ type: ADD_PAGE_ITEM, value: {} });

export const getChangeItemFromChildrenAction = (index, value) => ({ type: CHANGE_PAGE_ITEM, index, value });

export const getDeleteItemFromChildrenAction = index => ({ type: DELETE_PAGE_ITEM, index });

export const getChangeItemPositionAction = (oldIndex, newIndex) => ({ type: CHANGE_PAGE_ITEM_POSITION, oldIndex, newIndex });
