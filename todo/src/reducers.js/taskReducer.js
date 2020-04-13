export const initialTaskState = [
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                tasks: 
                [...state.tasks, 
                {task: action.payload,
                completed: false,
                id: Date.now()}
            ]};
        case "TOGGLE_COMPLETE":
            return {
                tasks: state.tasks.map((t, id) => 
                    id === action.id ? {...t, completed: !t.completed} : t
                )
            };
            default:
                return state;
    }
    
};