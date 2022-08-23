
import { configureStore } from '@reduxjs/toolkit';

const reducer=(state,action)=>{
    switch(action.type){
        case "refresh":
            return{
                ...state,refresh:action.data
            }
        default:
            return{
                ...state
            }
    }
}
const store=configureStore({reducer:reducer});
export default store;