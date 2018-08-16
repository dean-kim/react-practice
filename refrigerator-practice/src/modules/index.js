import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션타입
const CREATE = 'refrigeratorDrawer/CREATE';
const REMOVE = 'refrigeratorDrawer/REMOVE';

export const create = createAction(CREATE); // name
export const remove = createAction(REMOVE);

// 초기 상태를 정의합니다
const initialState = Map({
    counters: List([
        Map({
            name: '',
            number: 0
        })
    ])
});

export default handleActions({
    [CREATE]: (state, action) => {
        const refrigeratorDrawers = state.get('refrigeratorDrawers');

        return state.set('refrigeratorDrawers', refrigeratorDrawers.push(
            Map({
                name: action.payload,
                number: 0
            })
        ));
    },
    [REMOVE]: (state, action) => {
        const refrigeratorDrawers = state.get('refrigeratorDrawers');
        return state.set('refrigeratorDrawers', refrigeratorDrawers.pop());
    }

}, initialState);
