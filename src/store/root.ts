import { configureStore } from '@reduxjs/toolkit'
import regulaterArraySlice from './favoriteReducer'

export const store = configureStore({
  reducer: {
    regulaterFavorite: regulaterArraySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch