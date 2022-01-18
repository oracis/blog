import produce from "immer";

const initSchema = {
    schema: {
        name: "Page",
        attributes: {},
        children: []
    }
};

export default (state = initSchema, action) => produce(state, draft => {

});
