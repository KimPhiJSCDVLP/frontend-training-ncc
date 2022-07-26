import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import Home from './HomeComponent/home';
import ListTodo from './ListTodo/listtodo';
import {v4} from 'uuid'

const API = [
    {
        id: 1,
        name: "Todo 1",
        time: '26/7/2022',
        isCompleted: false,
    },
    {
        id: 2,
        name: "Todo 2",
        time: '26/7/2022',
        isCompleted: true,
    },
    {
        id: 3,
        name: "Todo 3",
        time: '26/7/2022',
        isCompleted: false,
    },
];

export default function Index() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [textInput,setTextInput] = useState (null);
    const [inputSearchValue, setInputSearchValue] = useState(null);
    // call API
    useEffect(() => {
        setItems(API);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    // useEffect(() => {
    //     const stroragedTodoList = localStorage.getItem(TODO_APP_STRORAGE);
    //     if(stroragedTodoList) {
    //         setItems(JSON.parse(stroragedTodoList));
    //     }
    // })
    // //localStroge
    // useEffect (() => {
    //     localStorage.setItem(TODO_APP_STRORAGE, JSON.stringify(items))
    // }, [items])
    //handle remove

    const handleRemove = (id) => {
        const index = items.findIndex((item) => item.id === id);
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }
    //search
    const search = () => {
        setLoading(true);
        setTimeout(() => {
          setItems(
            API.filter((item) => item.name == inputSearchValue)
          );
          setLoading(false);
        }, 1000);
      };
      const handleOnchangeInputSearch = (event) => {
        setInputSearchValue(event.target.value);
      };
    //   var filterCourse = course.filter(function(course,index,array){
    //     return course.price > 200;
    //   })
    // handle add
    const onChangeInput = useCallback((e) => {
        setTextInput(e.target.value);
    },[]);

    const onAddButton = useCallback((e) => {
        setItems([
            {
                id: v4() ,
                name :textInput,
                time :'2022',
                isCompleted :false,
            },...items]);
            setTextInput("");
            },
            [textInput,items]
    );
    return (
        <>
            {loading ? (
                <div id='loader'></div>
            ) : 
            ( <div className="container animate-bottom ">
            <div className="row">
                <h1 className='heading'>TODO APP</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="wrapper">
                        {/* <Home onAddButton = {onAddButton} handleAdd = {handleAdd}  /> */}
                        <div className="form-group mb-2">
                            <label htmlFor="createItem" className="sr-only">
                                Create
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Item Name"
                                onChange={onChangeInput}
                            />
                            <button onClick={onAddButton} type="submit"  className="btn btn-primary ">
                                Create
                            </button>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="createItem" className="sr-only">
                                Create
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Item Name"
                                onChange={handleOnchangeInputSearch}
                            />
                            <button onClick={search} type="submit"  className="btn btn-primary ">
                                Search
                            </button>
                        </div>
                        <ListTodo handleRemove={handleRemove} items={items}/>
                    </div>
                </div>
            </div>
        </div>)} 
        </>
    )
}
