// 액션 타입 정하기
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// 액션 생성 함수
// {type: ADD_TODO, text: 'test1'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// 예시
// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_COMPLETE };
}
