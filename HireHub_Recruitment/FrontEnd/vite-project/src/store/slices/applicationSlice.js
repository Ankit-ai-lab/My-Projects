import { createSlice } from '@reduxjs/toolkit'

const applicationSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    currentApplication: null,
    filters: {
      status: '',
      job: '',
      candidate: '',
    },
    sortBy: 'newest',
  },
  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload
    },
    setCurrentApplication: (state, action) => {
      state.currentApplication = action.payload
    },
    setApplicationFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setApplicationSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    addApplication: (state, action) => {
      state.applications.unshift(action.payload)
    },
    updateApplication: (state, action) => {
      const index = state.applications.findIndex(app => app._id === action.payload._id)
      if (index !== -1) {
        state.applications[index] = action.payload
      }
    },
  },
})

export const {
  setApplications,
  setCurrentApplication,
  setApplicationFilters,
  setApplicationSortBy,
  addApplication,
  updateApplication,
} = applicationSlice.actions

export default applicationSlice.reducer

export const selectAllApplications = (state) => state.applications.applications
export const selectCurrentApplication = (state) => state.applications.currentApplication
export const selectApplicationFilters = (state) => state.applications.filters
export const selectApplicationSortBy = (state) => state.applications.sortBy