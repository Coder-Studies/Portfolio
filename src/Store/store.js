import { configureStore } from '@reduxjs/toolkit'
import UISlice from './Ui.Slice'


export default configureStore({
  reducer: {
    Ui: UISlice
  },
})

