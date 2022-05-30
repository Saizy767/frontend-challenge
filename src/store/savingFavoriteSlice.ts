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
  array: [],
}

export const regulaterArraySlice = createSlice({
  name: 'regulater',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<ICatBlock>) => {
      state.array = [...state.array, action.payload]
    },
    decrement: (state, action: PayloadAction<ICatBlock>) => {
      for (let i=0; i < state.array.length; i++){
        if (state.array[i].id === action.payload.id){
          state.array.splice(i, 1)
        }
      }
    }
  },
})

export const { increment, decrement} = regulaterArraySlice.actions

export default regulaterArraySlice.reducer