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
    addProject: (state, action) => {
        [action.payload, ...state.projects];
    },
},
});

export const { setProjects, addProject } = projectSlice.actions;

export default projectSlice.reducer;