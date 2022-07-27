import React from 'react'
import Todo from './Todo'

export default function TodoList( {todoList, deleteTodo}) {
    return (
        <div>
            {
                todoList.map(todo => <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id}></Todo>)
            }
        </div>
    )
}
