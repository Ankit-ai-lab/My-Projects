import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api'
import authReducer from './slices/authSlice'
import jobReducer from './slices/jobSlice'
import applicationReducer from './slices/applicationSlice'
import interviewReducer from './slices/interviewSlice'
import analyticsReducer from './slices/analyticsSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    jobs: jobReducer,
    applications: applicationReducer,
    interviews: interviewReducer,
    analytics: analyticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})