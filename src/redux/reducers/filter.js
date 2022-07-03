import {SHOW_ALL, SHOW_COMPLETE} from '../actions'

const initialState = "ALL";

// 리듀서 쪼개기 filter 리듀서
export default function filter(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  // 아무 변화가 없음
  return previousState;
}