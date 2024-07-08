import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../state/counter/counterSlice";
import todoSliceReducer from "../state/todo/todoSlice";

export default configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoSliceReducer
    }
})