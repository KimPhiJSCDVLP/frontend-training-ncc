import React from 'react'
import './style.css'
export default function Form(props) {
  return (
    <>
    <div className="form-group mb-2">
      <label htmlFor="createItem" className="sr-only">
        Create
      </label>
      <input
        type="text"
        className="form-control"
        id="createItem"
        placeholder="Item Name"
        onChange={props.handleAdd}
      />
      <button onClick={props.onAddButton} type="submit"  className="btn btn-primary ">
        Create
      </button>
    </div>
    </>
  )
}
