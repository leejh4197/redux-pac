import { ADD_TODO, COMPLETE_TODO, SHOW_COMPLETE, SHOW_ALL } from "./actions";

// state 예시
// ['test1', 'test2'];
// state 변경 예시
// [{text: 'test1', done: false},{text: 'test2', done: false}]
// {todos: [{text: 'test1', done: false},{text: 'test2', done: false}], filter: 'ALL' }

// 초기값을 설정
const initialState = { todos: [], filter: "ALL" };

// 리듀서 (상태를 변경한다.)
export function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: 'COMPLETE',
    }
  }
  
  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: 'ALL',
    }
  }

  // 아무 변화가 없음
  return previousState;
}
