const tabs = (previousState, action) => {

    if (typeof previousState === 'undefined') {
        return {'done': 'inactive', 'not_done': 'active'};
    } else if (action.type === "CHANGE_TAB_STATE") {
        let nextState = Object.assign({}, previousState);

        if (action.tab_name === "Done") {
            nextState.done = (nextState.done === 'active') ? 'inactive' : 'active';
        } else {
            nextState.not_done = (nextState.not_done === 'active') ? 'inactive' : 'active';
        }
        return nextState;
    } else {
        return previousState;
    }

};

export default tabs