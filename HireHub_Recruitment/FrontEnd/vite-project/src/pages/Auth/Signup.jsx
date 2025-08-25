import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/authSlice'
import SignupForm from '../../components/forms/SignupForm'
import Navbar from '../../components/layout/Navbar'

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    setIsLoading(true)
    try {
      // Simulate API call
      setTimeout(() => {
        dispatch(setCredentials({
          user: { id: 1, name: data.firstName + ' ' + data.lastName },
          accessToken: 'fake-jwt-token',
          role: data.role
        }))
        navigate(`/${data.role}/dashboard`)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Signup failed:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">Join HireHub today</p>
          </div>
          <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup