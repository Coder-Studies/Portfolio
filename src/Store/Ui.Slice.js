import { createSlice } from '@reduxjs/toolkit'

export let UISlice = createSlice({
    name: 'ui',
    initialState: {
        projects: []
    },
    reducers: {
        setProjectData: (state, action) => {
            state.projects = action.payload
        }
    }
})

export let { setProjectData } = UISlice.actions
export default UISlice.reducer


