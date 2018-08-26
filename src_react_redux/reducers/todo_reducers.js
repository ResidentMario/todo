const todos = (previousState, action) => {

    if (typeof previousState === 'undefined') {
        return [
                {'text': 'Clean the cat', 'doneness': 'done', 'delete_available': false},
                {'text': 'Wash the car', 'doneness': 'not_done', 'delete_available': false},
                {'text': 'Eat all the cookies', 'doneness': 'done', 'delete_available': false}
        ];
    } else if (action.type === "CHANGE_ITEM_DONENESS") {
        let nextState = Object.assign({}, previousState);
        let task = nextState.indexOf(action.task);
        if (nextState.todos[task] === 'done') {
            nextState.todos[task] = 'not-done';
        } else {
            nextState.todos[task] = 'done';
        }
        return nextState;
    } else {
        return previousState;
    }

};

export default todos