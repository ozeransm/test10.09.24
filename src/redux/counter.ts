import { INCREMENT } from './actions';

interface CounterState {
    value: number[];
}

const initialState: CounterState = {
    value: [],
};

const counterReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value,
            };
        default:
            return state;
    }
};

export default counterReducer;