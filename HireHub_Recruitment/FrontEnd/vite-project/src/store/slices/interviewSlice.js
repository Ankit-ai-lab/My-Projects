import { createSlice } from '@reduxjs/toolkit'

const interviewSlice = createSlice({
  name: 'interviews',
  initialState: {
    interviews: [],
    currentInterview: null,
    filters: {
      status: '',
      candidate: '',
      interviewer: '',
      dateRange: {
        start: null,
        end: null,
      },
    },
  },
  reducers: {
    setInterviews: (state, action) => {
      state.interviews = action.payload
    },
    setCurrentInterview: (state, action) => {
      state.currentInterview = action.payload
    },
    setInterviewFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    addInterview: (state, action) => {
      state.interviews.unshift(action.payload)
    },
    updateInterview: (state, action) => {
      const index = state.interviews.findIndex(interview => interview._id === action.payload._id)
      if (index !== -1) {
        state.interviews[index] = action.payload
      }
    },
    deleteInterview: (state, action) => {
      state.interviews = state.interviews.filter(interview => interview._id !== action.payload)
    },
  },
})

export const {
  setInterviews,
  setCurrentInterview,
  setInterviewFilters,
  addInterview,
  updateInterview,
  deleteInterview,
} = interviewSlice.actions

export default interviewSlice.reducer

export const selectAllInterviews = (state) => state.interviews.interviews
export const selectCurrentInterview = (state) => state.interviews.currentInterview
export const selectInterviewFilters = (state) => state.interviews.filters