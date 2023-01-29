import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false,
  },
  reducers: {
    openSidebar: (state) => {
      state.open = true
    },
    closeSidebar: (state) => {
      state.open = false
    },
  },
})

export const { openSidebar, closeSidebar } = sidebarSlice.actions

export const SidebarReducer = sidebarSlice.reducer
