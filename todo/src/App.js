import React, { useReducer } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { taskReducer, initialTaskState } from './reducers.js/taskReducer';

const ADD_TASK = "ADD_TASK";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

function App() {
  
  return (
    <div className="App">
      <TaskForm />
    </div>
  );
}

export default App;
