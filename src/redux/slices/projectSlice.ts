import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
    },
reducers: {
    setProjects: (state, action) => {
        state.projects = action.payload;
    },
    updateProjects: (state, action) => {
        [action.payload, ...state.projects];
    },
},
});

export const { setProjects, updateProjects } = projectSlice.actions;

export default projectSlice.reducer;