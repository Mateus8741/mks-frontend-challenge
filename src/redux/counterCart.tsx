import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: any, { payload }: PayloadAction<string>) => {
      state.push(payload)
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item: any) => item.id === action.payload,
      )
      state.splice(itemIndex, 1)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
