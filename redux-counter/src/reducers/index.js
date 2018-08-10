import { Map, List } from 'immutable';
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
// immutable 미사용 버전
// const initialState = {
//     counters: [
//         {
//             color: 'black',
//             number: 0
//         }
//     ]
// }

// immutable 적용
const initialState = Map({
    counters: List({
        color: 'black',
        number: 0
    })
})

// 리듀서 함수를 정의합니다.
// immutable 미사용 버전
// function counter(state = initialState, action) {
//     // 레퍼런스 생성
//     const { counters } = state;
//
//     switch(action.type) {
//         // 카운터를 새로 추가합니다
//         case types.CREATE:
//             return {
//                 counters: [
//                     ...counters,
//                     {
//                         color: action.color,
//                         number: 0
//                     }
//                 ]
//             };
//         // slice 를 이용하여 맨 마지막 카운터를 제외시킵니다
//         case types.REMOVE:
//             return {
//                 counters: counters.slice(0, counters.length - 1)
//             };
//
//         // action.index 번째 카운터의 number 에 1 을 더합니다.
//         case types.INCREMENT:
//             return {
//                 counters: [
//                     // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다.
//                     ...counters.slice(0, action.index),
//                     {
//                         // 기존 값은 유지하면서
//                         ...counters[action.index],
//                         // number 값을 덮어쓴다.
//                         number: counters[action.index].number + 1
//                     },
//                     // action.index + 1 ~ 마지막까지 잘라온다.
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         // action.index 번째 카운터의 number 에 1 을 뺍니다
//         case types.DECREMENT:
//             return {
//                 counters: [
//                     ...counters.slice(0, action.index),
//                     {
//                         ...counters[action.index],
//                         number: counters[action.index].number - 1
//                     },
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         // action.index 번째 카운터의 색상을 변경합니다
//         case types.SET_COLOR:
//             return {
//                 counters: [
//                     ...counters.slice(0, action.index),
//                     {
//                         ...counters[action.index],
//                         color: action.color
//                     },
//                     ...counters.slice(action.index + 1, counters.length)
//                 ]
//             };
//
//         default:
//             return state;
//     }
// };

// immutable 적용
function counter(state = initialState, action) {
    const counters = state.get('counters');

    switch (action.type) {

        // 카운터 추가
        case types.CREATE:
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })));

        // 카운터 삭제
        case types.REMOVE:
            return state.set('counters', counters.pop());

        // action.index 카운터 숫자 증가
        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));

        // action.index 카운터 숫자 감소
        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') - 1)
            ));

        // action.index 카운터 색 변경
        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('color', action.color)
            ));
        default:
            return state;
    }
}


export default counter