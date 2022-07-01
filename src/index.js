import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

// 스토어의 변경사항을 구독함
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
});

// console.log(store);
// 액션 상태 변경
// store.dispatch(addTodo("who"));
// store.dispatch(addTodo("are"));
// store.dispatch(addTodo("you"));
// unsubscribe();
// store.dispatch(addTodo("who"));
// store.dispatch(addTodo("are"));
// store.dispatch(addTodo("you"));

// []에서 ["coding"]으로 바뀜

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
