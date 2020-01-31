import React from 'react';
import './App.css';
// import ClassComponent from "./component/ClassComponent";
import Header from './ReactStrapExample'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
// import TodoApp from './component/Todolist'
import Signin from './component/Signin'
import Register from './component/Register'
import Todo from './pages/Todo';
// import SimpleTodo from './pages/SimpleTodo'
import TodoHooks from './pages/TodoHooks'
// import LifeCycle from './pages/LifeCycle'
import ApiReact from './pages/ApiReact'
import UseEffect from './pages/GetCard'



function App() {

  const isLogin = JSON.parse(localStorage.getItem('status'))


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/didmount">
          <ApiReact />
        </Route>
        <Route path="/useeffect">
          <UseEffect />
        </Route>
        <Route path="/todolist">
          {/* {isLogin ? <TodoHooks /> : <Redirect to="/" />} */}
          <TodoHooks />
        </Route>
        <Route path="/todoliststate">
          {/* {isLogin ? <Todo /> : <Redirect to="/" />} */}
          <Todo />
        </Route>
        <Route path="/signin">
          <Signin isLogin={isLogin} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

