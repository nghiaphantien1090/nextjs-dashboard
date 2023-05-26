import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from './store';
import type { RootState, } from './store'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector