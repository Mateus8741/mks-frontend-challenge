// import { CardProps } from '@/components/Cards'
import { createSlice } from '@reduxjs/toolkit'

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [] as unknown as CardProps[],
//   reducers: {
//     addItem: (state, action) => {
//       return [...state, action.payload]
//     },
//     removeItem: (
//       state: any,
//       action: PayloadAction<{ id: string; name: string }>,
//     ) => {
//       const index = state.findIndex((item) => item.id === action.payload)
//       state.splice(index, 1)
//       state -= state[index]
//     },
//     increaseItem: (state, action) => {
//       // find the index of the item to increase
//       const index = state.findIndex((item) => item.id === action.payload)
//       // increase the quantity of the item
//       state[index] += 1
//       // update the total
//       state += state[index]
//     },
//   },
// })

const initialState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: string) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    },
    removeItem: (state, action) => {
      // find the index of the item to remove
      const index = state.items.findIndex((item) => item.id === action.payload)
      // remove the item from the array
      state.items.splice(index, 1)
      // update the total
      state.total -= state.items[index]
    },
    increaseItem: (state, action) => {
      // find the index of the item to increase
      const index = state.items.findIndex((item) => item.id === action.payload)
      // increase the quantity of the item
      state.items[index].quantity += 1
      // update the total
      state.total += state.items[index].price
    },
  },
})

export const { addItem, removeItem, increaseItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer
