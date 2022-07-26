import React from 'react'
import TodoItem from '../TodoItem/todo'
import './style.css'
export default function ListTodo({items,handleRemove}) {
  return (
    <div className="list-todo">
        <h1 className='heading'>Todo List</h1>
        {items.map((item) => (
          <TodoItem 
            key = {item.id}
            item={item}
            handleRemove={handleRemove}
          />
        ))}
    </div>
  )
}
