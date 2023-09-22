import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../store';

// Dùng thay cho useDispatch vì trong TypeScript thì useDispatch chưa được infer type
export const useAppDispatch: () => AppDispatch = useDispatch;

// Dùng thay cho useSelector vì trong TypeScript thì useSelector chưa được infer type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
