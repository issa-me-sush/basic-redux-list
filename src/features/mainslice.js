import { createSlice } from '@reduxjs/toolkit'



export const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addItem: (state,action) => {
      state.push({id:Date.now(),text:action.payload});
    },
    deleteItem: (state,action) => {
      return state.filter((item) => item.id !== action.payload);
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addItem,deleteItem } = listSlice.actions

export default listSlice.reducer