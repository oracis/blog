import produce from "immer";
import { parseDataFromString } from "../../../common/util";

const initSchema = parseDataFromString(window.localStorage.schema, {
    name: "Page",
    attributes: {},
    children: []
});

const initState = { schema: initSchema };

export default (state = initState, action) => produce(state, draft => {
    switch (action.type) {
        case "CHANGE_SCHEMA":
            draft.schema = action.value;
            break;
        default:
            break;
    }
});
