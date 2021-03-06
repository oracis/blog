import { produce, original } from "immer";
import { arrayMoveImmutable } from 'array-move';
import { ADD_PAGE_ITEM, CHANGE_PAGE_ITEM, CHANGE_PAGE_ITEM_POSITION, CHANGE_SCHEMA, DELETE_PAGE_ITEM, CHANGE_SCHEMA_ATTRIBUTES } from "./constant";

const initSchema = {
    name: "Page",
    attributes: {},
    children: []
};

const initState = { schema: initSchema };

const reducer = (state = initState, action) => produce(state, draft => {
    switch (action.type) {
        case CHANGE_SCHEMA:
            draft.schema = action.value;
            break;
        case CHANGE_SCHEMA_ATTRIBUTES:
            draft.schema.attributes = action.value;
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
        case CHANGE_PAGE_ITEM_POSITION:
            draft.schema.children = arrayMoveImmutable(original(draft.schema.children), action.oldIndex, action.newIndex);
            break;
        default:
            break;
    }
});

export default reducer;
