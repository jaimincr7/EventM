import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state,action) => {
      state.value = state.value.concat(action.payload);
      console.log(state.value);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = eventSlice.actions

export default eventSlice.reducer
