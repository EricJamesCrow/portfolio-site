import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  type: string;
  tech: string[];
  status: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    updateProjects: (state, action: PayloadAction<Project>) => {
      state.projects = [action.payload, ...state.projects];
    },
    updateSingleProject: (state, action: PayloadAction<Project>) => {
      state.projects = state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
      );
  }  
  },
});

export const { setProjects, updateSingleProject, updateProjects } = projectSlice.actions;

export default projectSlice.reducer;
