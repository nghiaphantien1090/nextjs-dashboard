import { useDispatch } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import {showNavbarReducer }from './reducers/showNavbarReducer';
import { useSelector } from 'react-redux';

const rootReducer = combineReducers({
  navbar: showNavbarReducer,
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
