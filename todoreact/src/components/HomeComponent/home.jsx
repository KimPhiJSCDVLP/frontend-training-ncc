import React from 'react'
import Form from '../FormComponent/form'
import FormSearch from '../FormSearch/formSearch'
import ListTodo from '../ListTodo/listtodo'
import './style.css'
export default function Home(onAddButton,handleAdd) {
  return (
    <>
    {/* <Form onAddButton = {onAddButton} handleAdd = {handleAdd}/> */}
    <FormSearch/>
    </>
  )
}
