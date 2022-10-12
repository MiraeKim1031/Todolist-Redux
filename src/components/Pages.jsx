import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const Pages = () => {
  const selectedTodo = useSelector((state) => state.todoSetter.selectedTodo);
  const navigate = useNavigate();
  console.log(selectedTodo);

  return (
    <Wrap>
      <GlobalStyle />
            <Page>
              ID: {selectedTodo.id}
              <LeaveBtn onClick={()=>navigate("/")}>이전으로</LeaveBtn>
              <h2>{selectedTodo.title}</h2>
              <p>{selectedTodo.body}</p>
            </Page>
    </Wrap>
  );
};


const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
  background-color: #fffbcc;
}`;

const LeaveBtn = styled.button`
  background-color: #12615e;
  color: white;
  width: 80px;
  height: 25px;
  float: right;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid transparent;
`
const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffbcc;
`;

const Page = styled.div`
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 300px;
  border-radius: 10px;
  border: 3px solid #ff8082;
  padding: 20px;
  background-color: white;
  overflow: scroll;
`;

export default Pages;
