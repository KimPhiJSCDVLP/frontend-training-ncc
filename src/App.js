import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react'
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'
import Todo from './components/Todo'

function App() {

  const [todo, setTodo] = useState([
    {
      "id" :1,
      "title" : "Task 1",
      "status" : false
    },
    {
      "id" :2,
      "title" : "Task 2",
      "status" : false
    }
  ]);

    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    //add tassk
    const addTask = () => {
      if(newTask) {
        let num = todo.length +1 ;
        let newEntry = {
          id : num ,
          title : newTask,
          status : false
        }
        setTodo([...todo, newEntry])
        setNewTask('');

      }
    }
    //delete Task
    const deleteTask = (id) => {
      let newTask = todo.filter( task => task.id !==id)
      setTodo(newTask);

    }
    //task done
    const markDone = (id) => {
      const newTask = todo.map( task => {
        if(task.id === id){
          return({...task , status : !task.status})
        }
        return task;
      })
      setTodo(newTask)
    }
    //cancel update
    const cancelUpdate = (id) => {
      setUpdateData('');

    }
    //change task update
    const changeTask = (e) => {
      let newEntry = {
        id : updateData.id,
        title : e.target.value,
        status : updateData.status ? true : false
      }
      setUpdateData(newEntry);
    }
    // update tassk
    const updateTask = () => {
      let filterRecords = [...todo].filter( task => task.id !== updateData.id)
      let updateObject = [...filterRecords,updateData]
      setTodo(updateObject);
      setUpdateData('')
    }
  return (
    <div className="container App">
      <br/><br/>
      <h2>TodoApp</h2>
      <br/><br/>
      {updateData && updateData ? (
        <UpdateForm 
          updateData  = {updateData}
          changeTask = {changeTask}
          updateTask = {updateTask}
          cancelUpdate = {cancelUpdate}
        />
      ) : (
          <AddTaskForm 
            newTask={newTask}
            setNewTask = {setNewTask}
            addTask = {addTask}

          />
      ) }
      <br></br>
      {/* Display Todo List */}
      {todo && todo.length ? '' : 'No data'}
      <Todo
        todo = {todo} 
        markDone = {markDone} 
        deleteTask = {deleteTask}
        setUpdateData = {setUpdateData}
      />
    </div>
  );
}

export default App;
