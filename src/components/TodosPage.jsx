import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";


function Todospage() {
  return (
    <Layout>
      <GlobalStyle/>
      <Header>
      <h3>🔥My TodoList</h3>
      <h3>React🚀</h3>
      </Header>
      <Form />
      <TodoList>
        <Todo/>
      </TodoList>
    </Layout>
  );
}


const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
}`

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
  margin: auto;
  background-color: #fffbcc;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color:seagreen;
  height: 50px;
  align-items: center;
  border: 1px solid grey;
  padding: 10px;
  `

export default Todospage;
