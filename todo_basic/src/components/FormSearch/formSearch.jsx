import React from 'react'
import './style.css'
export default function FormSearch(props) {
  return (
    <>
    <div className="form-group mb-2">
      <label htmlFor="createItem" className="sr-only">
        Search
      </label>
      <input
        type="text"
        className="form-control"
        id="createItem"
        placeholder="Item Name"
        onChange={props.handleOnchangeInputSearch}
      />
      <button onClick={props.search} type="submit" className="btn btn-primary ">
      Search
      </button>
    </div>
    </>
  )
}
