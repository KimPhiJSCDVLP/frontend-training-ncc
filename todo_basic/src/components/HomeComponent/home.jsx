import React from 'react'
import Form from '../FormComponent/form'
import FormSearch from '../FormSearch/formSearch'
import ListTodo from '../ListTodo/listtodo'
import './style.css'
export default function Home(props) {
  return (
    <>
    <Form onAddButton = {props.onAddButton} handleAdd = {props.handleAdd}/>
    <FormSearch search = {props.search} handleOnchangeInputSearch = {props.handleOnchangeInputSearch}/>
    </>
  )
}
