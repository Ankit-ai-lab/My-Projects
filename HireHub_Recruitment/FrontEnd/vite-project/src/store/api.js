import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from './slices/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 403) {
    // Try to get a new token
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
    
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      // Store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      // Retry the original query with the new token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Job', 'Application', 'User', 'Interview', 'Analytics'],
  endpoints: builder => ({})
})