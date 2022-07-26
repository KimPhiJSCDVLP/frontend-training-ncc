import React from 'react'
import './style.css'
export default function Form(onAddButton,handleAdd) {
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
        onChange={handleAdd}
      />
      <button onClick={onAddButton} type="submit"  className="btn btn-primary ">
        Create
      </button>
    </div>
    </>
  )
}
