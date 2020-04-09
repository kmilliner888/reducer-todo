import React, { useState, useReducer } from 'react';
import { taskReducer, initialTaskState } from '../reducers.js/taskReducer';


const TaskForm = () => {
    const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);
    const [task, setTask] = useState("");

    const handleChanges = e => {
        setTask(e.target.value);
    }

    const addTask = () => {
        dispatch({type: "ADD_TASK", payload: task});
    };

    const toggleComplete = () => {
        dispatch({type: "TOGGLE_COMPLETE"})
    }

    const handleAddTask = e => {
        e.preventDefault();
        setTask({...task, [e.target.name]: e.target.value});
    }

    const itemComplete = e => {
        e.preventDefault();
        setTask("");


    }

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    name="task"
                    placeholder="Add a task here"
                    value={task}
                    onChange={handleChanges}
                />
                <button onClick={addTask}>Add Task</button>
                <button className="clear-btn" onClick={itemComplete}>Clear</button>
            </form>
        </div>
    )
};

export default TaskForm;