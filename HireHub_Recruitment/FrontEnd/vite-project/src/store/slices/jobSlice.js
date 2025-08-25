import { createSlice } from '@reduxjs/toolkit'

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    currentJob: null,
    filters: {
      search: '',
      location: '',
      type: '',
      skills: [],
    },
    sortBy: 'newest',
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload
    },
    setCurrentJob: (state, action) => {
      state.currentJob = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    addJob: (state, action) => {
      state.jobs.unshift(action.payload)
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex(job => job._id === action.payload._id)
      if (index !== -1) {
        state.jobs[index] = action.payload
      }
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job._id !== action.payload)
    },
  },
})

export const {
  setJobs,
  setCurrentJob,
  setFilters,
  setSortBy,
  addJob,
  updateJob,
  deleteJob,
} = jobSlice.actions

export default jobSlice.reducer

export const selectAllJobs = (state) => state.jobs.jobs
export const selectCurrentJob = (state) => state.jobs.currentJob
export const selectJobFilters = (state) => state.jobs.filters
export const selectJobSortBy = (state) => state.jobs.sortBy