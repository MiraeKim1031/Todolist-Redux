import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { submitThis } from "../redux/modules/todo";


const Form = () => {

const todoTitle= useRef();
const todoBody= useRef();
const dispatch = useDispatch();
const submitHandler = () => {
    const refs = [ todoTitle.current.value, todoBody.current.value ]
    dispatch(submitThis(refs))
    todoTitle.current.value="";
    todoBody.current.value="";
}

    return (
        <Wrap>
            <div>
            <b>제목</b>
            <Subject type="text" ref={todoTitle}/>
            <b>내용</b>
            <Content type="text" ref={todoBody}/>
            </div>
            <SubmitBtn onClick={submitHandler}>
            <b>추가하기</b>
            </SubmitBtn>
        </Wrap>
    );
}

const Wrap = styled.div`
    background-color: #fffaf2;
    height: 120px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0px 30px;
    justify-content: space-between;
`

const Subject = styled.input`
    border-radius: 10px;
    background-color: azure;
    border: 1px solid #5ed3b1;
    width: 250px;
    height: 40px;
    margin: 10px;
    margin-right: 20px;
`

const Content = styled.input`
    border-radius: 10px;
    background-color: azure;
    border: 1px solid #5ed3b1;
    width: 250px;
    height: 40px;
    margin: 10px;    
`

const SubmitBtn = styled.button`
    background-color: #5ed3b1;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #5ed3b1;
    cursor: pointer;
`

export default Form;

