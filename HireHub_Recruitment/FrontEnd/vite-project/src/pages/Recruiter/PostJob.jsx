import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import JobForm from '../../components/forms/JobForm'
import Button from '../../components/ui/Button'

const PostJob = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data) => {
    setIsLoading(true)
    try {
      // Simulate API call
      setTimeout(() => {
        console.log('Job posted:', data)
        setIsLoading(false)
        alert('Job posted successfully!')
      }, 2000)
    } catch (error) {
      console.error('Failed to post job:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="recruiter" />
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
              <p className="text-gray-600">Fill in the details below to create a new job posting</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <JobForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostJob