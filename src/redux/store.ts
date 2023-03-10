import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './counterCart'
import { SidebarReducer } from './sliceOpenSidebar'

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
