import './App.css';
import { useState } from 'react';
function App() {
  const handleClick=()=>{

    const task ={
      id:taskList.length + 1,
      task :taskName
    }
     SetTaskList([...taskList,task])
  }
  const handleChange=(e)=>{
    SetTaskName(e.target.value);
  }

  const handleDelete = (taskId) => {
    const filteredArray = taskList.filter((task)=> {
      return taskId !== task.id})
    SetTaskList(filteredArray)
  }

  const [taskName,SetTaskName]=useState("");
  const [taskList,SetTaskList]=useState([]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input onChange={handleChange} type="text"/>
      <button onClick={handleClick} id="Add">Add</button>
      {taskList.map((task,index)=>{
          return <div className='task' key={index}>
                  {task.task.length>0 &&  <p>{task.task}</p>}
                 {task.task.length > 0 && <button onClick={() => handleDelete(task.id)}>x</button>} 
          </div>
      })}
    </div>
  );
}

export default App;
