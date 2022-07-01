import { ADD_TODO } from "./actions";

// state 예시
// ['test1', 'test2'];
// state 변경 예시
// [{text: '코딩', done: false}]

// 초기값을 설정
const initialState = [];

// 리듀서 (상태를 변경한다.)
export function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  // 아무 변화가 없음
  return previousState;
}
