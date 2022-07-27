import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import { parse, v4 } from 'uuid'
import TodoList from './components/TodoList'
import Loading from './components/loading'



export default function TodoApp() {
    const storageTodo = JSON.parse(localStorage.getItem('todos'))
    console.log(storageTodo);


    const [textInput, setTextInput] = useState('')
    const [todoList, setTodoList] = useState(storageTodo)

    const handleSubmit = () => {
        
        setTodoList(prev => {
            const newTodo = [...prev, { id: v4(), name: textInput, isComplete: false }]

            const jsonTodo = JSON.stringify(newTodo)
            localStorage.setItem('todos', jsonTodo)

            return newTodo
        })
        setTextInput('')
        
    }

    const deleteTodo = (id) => {
        const i = todoList.findIndex(todo => (todo.id) === id)
        const prevTodo = [...todoList]
        prevTodo.splice(i, 1)
        setTodoList(prevTodo)
    }


    return (
        <div>
            <TextField
                placeholder='Enter something...'
                value={textInput}
                onChange={e => setTextInput(e.target.value)}
                elemAfterInput={
                    <Button
                        style={{ 'margin': '5px' }}
                        isDisabled={!textInput}
                        onClick={handleSubmit}>
                        Add +
                    </Button>
                }
            />
            <TodoList deleteTodo={deleteTodo} todoList={todoList} />
        </div>
    )
}
