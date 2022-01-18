import { CHANGE_SCHEMA} from "./constant";

export const getChangeSchemaAction = value => ({
    type: CHANGE_SCHEMA,
    value
});