import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCats = createAsyncThunk(
    'cats/get',
    async(number: number) => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${number}`)
        return await response.json()
    }
)
