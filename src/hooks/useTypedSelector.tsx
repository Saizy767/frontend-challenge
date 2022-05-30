import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState} from '../store/root'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector