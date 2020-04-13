import React from 'react';

const Task= (props) => {
    (console.log("Task props", props));
    return (
        <div className={`item${props.item.completed ? ' completed' : ' '}`} onClick={e => props.TOGGLE_COMPLETE(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
};

export default Task;