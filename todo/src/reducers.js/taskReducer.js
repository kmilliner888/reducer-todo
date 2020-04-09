export const initialTaskState = 
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                task: action.payload,
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                completed: !state.completed
            }
            default:
                return state;
    }
    
};