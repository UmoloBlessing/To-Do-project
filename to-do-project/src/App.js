// import logo from './logo.svg';
// import './App.css';

// import Todo from './components/Todo';
// import InlineComponent from './components/InlineComponent';
// import StylesheetComponent from './components/StylesheetComponent';
// import ModuleComponent from './components/ModuleComponent';
import Header from './components/Header';
import Form from './components/Form'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);


  return (
    <div className="App">

      <Header></Header>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}
      >
        
      </Form>

      {/* <ModuleComponent></ModuleComponent> */}


      {/* <StylesheetComponent></StylesheetComponent> */}
      
      {/* <Todo></Todo> */}
      {/* <InlineComponent></InlineComponent> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
