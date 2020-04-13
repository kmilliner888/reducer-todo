import React, { useState, useReducer } from 'react';
import TaskList from './TaskList';
import { taskReducer, initialTaskState } from '../reducers.js/taskReducer';


const TaskForm = () => {
    const [{tasks}, dispatch] = useReducer(taskReducer, {tasks: []});
    console.log("tasks", tasks);
    const [newTask, setNewTask] = useState("");

    const handleChanges = e => {
        setNewTask(e.target.value);
    }

    const clearForm = e => {
        e.preventDefault();
        setNewTask("");
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TASK", payload: newTask})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newTask"
                    placeholder="Add a task here"
                    value={newTask}
                    onChange={handleChanges}
                />
                <button type="submit">Add Task</button>
            </form>
            <button className="clear-btn" onClick={clearForm}>Clear</button>
            <div>
                <h1>Task List</h1>
                {tasks.map((item, id) => (
                    <div 
                    key={item.id} 
                    className="item"
                    onClick={() => dispatch({type: "TOGGLE_COMPLETE", id})}
                    style= {{
                        textDecoration: item.completed ? "line-through" : ""
                    }}
                    >
                        {item.task}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TaskForm;