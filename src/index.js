import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo, completeTodo } from "./redux/actions";

// 스토어의 변경사항을 구독함
store.subscribe(()=>{
  console.log(store.getState())
});

// 액션 상태 변경
// store.dispatch(addTodo("who"));
// store.dispatch(addTodo("are"));
// store.dispatch(addTodo("you"));
// 구독을 취소함
// unsubscribe();
// store.dispatch(addTodo("who"));
// store.dispatch(addTodo("are"));
// store.dispatch(addTodo("you"));


store.dispatch(addTodo('test1'))
store.dispatch(completeTodo(0))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
