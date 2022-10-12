import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteThis, viewThis } from "../redux/modules/todo";
import { completeThis } from "../redux/modules/todo";


const Todo = ({data}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        dispatch(deleteThis(data.id))
    }
    
    const onCompleteHandler = () => {
        dispatch(completeThis(data.id))
    }
    
    const onViewHandeler = () => {
        dispatch(viewThis(data.id))
        navigate(`/page/${data.id}`)
    }

    return (
        <TodoBox>
            <View onClick={onViewHandeler}><b>상세보기</b></View>
            <div><h2> {data.title} </h2>
            <p> {data.body} </p></div>
            <Btns>
            <Delete onClick={onDeleteHandler}>삭제하기</Delete>
            <Done onClick={onCompleteHandler}> {!data.isDone ? "완료하기" : "취소하기"} </Done>
            </Btns>
        </TodoBox>
    );
}
export default Todo;


const View = styled.button`
background-color: transparent;
border: 0px;
color: #12615e;
float: right;
cursor: pointer;
`

const TodoBox = styled.div`
    background-color: white;
    width: 250px;
    height: auto;
    border-radius: 15px;
    padding: 20px 30px;
    border: 3px solid #ff8082;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    box-sizing: content-box;
    display: block;
    overflow: hidden;
`

const Btns = styled.div`
    display: flex;
    padding-top: 10px;
    gap: 10px;
`

const Delete = styled.button`
    background-color :#c3caff;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid transparent;
    cursor: pointer;
`

const Done = styled.button`
    background-color: #c3caff;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid transparent;
    cursor: pointer;
`

