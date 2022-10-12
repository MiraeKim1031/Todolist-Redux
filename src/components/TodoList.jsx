import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = () => {

    const todoList = useSelector((state) => state.todoSetter.todos);
    console.log(todoList)

    return (
        <Lists>
        <h2>Working... 🐻</h2>
        <ListSet> 
            {todoList.map(todo => (
            !todo.isDone &&
            <Todo key={todo.id} data={todo} /> 
            ))}

        </ListSet>
        <h2>Done...! 🥰</h2>
        <ListSet>
            {todoList.map(todo => (
            todo.isDone &&
            <Todo key={todo.id} data={todo} /> 
            ))}
        </ListSet>
        </Lists>
    )
}

  
export default TodoList;


const ListSet = styled.div`
    padding: 30px 30px;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    background-color: #fffbcc;
`

const Lists = styled.div`
    padding: 30px;
`