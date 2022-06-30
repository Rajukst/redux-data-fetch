import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './totosSlice';
import {Row} from "react-bootstrap"
import DisplayTodos from './DisplayTodos';
const ToDoView = () => {
    const {isloading, todo, error}= useSelector((state)=>state.todo);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTodos())
    },[])
    return (
        <div>
            {isloading && <h3>Loading Data...</h3>}
            {error && <h2>{error}</h2>}
            <Row xs={1} md={4} className="g-4 m-2">
            {todo && todo.map((getAllTodos)=> <DisplayTodos
                key={getAllTodos.id}
                allTodos={getAllTodos}
            ></DisplayTodos> )}
</Row>
        </div>
    );
};

export default ToDoView;