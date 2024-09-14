import { combineReducers } from 'redux';
import dataReducer from '../data';

const rootReducer = combineReducers({
    users: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;