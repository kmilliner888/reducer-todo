import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    (console.log('TaskList props', props));
    return (
        <div className="list">
            {props.state.map(item => (
                <Task
                key={item.id} 
                item={item} 
                toggleCompleted={props.TOGGLE_COMPLETE}  />
            ))}

        </div>
    )
};

export default TaskList;