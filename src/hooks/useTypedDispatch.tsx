import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/root'

export const useTypedDispatch = () => useDispatch<AppDispatch>()