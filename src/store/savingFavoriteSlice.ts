import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICatBlock{
  id: string
  url: string
  isFavorite: boolean
}

interface IArray{
  array: ICatBlock[] | []
} 

const initialState: IArray = {
  array: JSON.parse(localStorage.getItem('favorites') || '[]'),
}

export const regulaterArraySlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adding: (state, action: PayloadAction<ICatBlock>) => {
      state.array = [...state.array, action.payload]
      localStorage.setItem('favorites',JSON.stringify([...state.array]))
    },
    deleting: (state, action: PayloadAction<ICatBlock>) => {
      for (let i=0; i < state.array.length; i++){
        if (state.array[i].id === action.payload.id){
          state.array.splice(i, 1)
          localStorage.setItem('favorites', JSON.stringify([...state.array]))
        }
      }
    }
  },
})

export const { adding, deleting} = regulaterArraySlice.actions

export default regulaterArraySlice.reducer