import { createSlice } from '@reduxjs/toolkit'

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    metrics: {
      totalJobs: 0,
      totalApplications: 0,
      totalCandidates: 0,
      totalHires: 0,
      applicationStatus: {},
      timeToFill: 0,
      candidateSources: {},
    },
    timeRange: '30days',
  },
  reducers: {
    setMetrics: (state, action) => {
      state.metrics = action.payload
    },
    setTimeRange: (state, action) => {
      state.timeRange = action.payload
    },
  },
})

export const { setMetrics, setTimeRange } = analyticsSlice.actions

export default analyticsSlice.reducer

export const selectMetrics = (state) => state.analytics.metrics
export const selectTimeRange = (state) => state.analytics.timeRange