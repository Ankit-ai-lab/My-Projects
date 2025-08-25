import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectCurrentToken } from '../../store/slices/authSlice'

const Protected = ({ children }) => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default Protected