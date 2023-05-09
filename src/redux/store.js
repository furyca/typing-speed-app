import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './wordsSlice.js'

export const store = configureStore({
  reducer: {
    wordsSlice: sliceReducer
  },
})