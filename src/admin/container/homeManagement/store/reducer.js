import produce from "immer";
import { parseDataFromString } from "../../../../common/util";
import { ADD_PAGE_ITEM, CHANGE_PAGE_ITEM, CHANGE_SCHEMA, DELETE_PAGE_ITEM } from "./constant";

const initSchema = parseDataFromString(window.localStorage.schema, {
    name: "Page",
    attributes: {},
    children: []
});

const initState = { schema: initSchema };

export default (state = initState, action) => produce(state, draft => {
    switch (action.type) {
        case CHANGE_SCHEMA:
            draft.schema = action.value;
            break;
        case ADD_PAGE_ITEM:
            draft.schema.children.push(action.value);
            break;
        case CHANGE_PAGE_ITEM:
            draft.schema.children.splice(action.index, 1, action.value);
            break;
        case DELETE_PAGE_ITEM:
            draft.schema.children.splice(action.index, 1);
            break;
        default:
            break;
    }
});
