import { configureStore } from "@reduxjs/toolkit";
import listReducer from './features/mainslice'


export default configureStore({
    reducer:{
        list: listReducer
    }
})