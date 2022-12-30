import { configureStore, combineReducers } from '@reduxjs/toolkit'
import theme from './theme'

const rootReducer = combineReducers({
    theme,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store