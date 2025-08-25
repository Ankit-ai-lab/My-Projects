import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../ui/Input'
import Button from '../ui/Button'

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
})

const ApplicationForm = ({ onSubmit, isLoading, jobTitle }) => {
  const [resume, setResume] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applicationSchema),
  })

  const handleResumeChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setResume(file)
    } else {
      alert('Please upload a PDF file')
    }
  }

  const handleFormSubmit = (data) => {
    if (!resume) {
      alert('Please upload your resume')
      return
    }
    onSubmit({ ...data, resume })
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Apply for: {jobTitle}</h2>
      
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        error={errors.fullName?.message}
        {...register('fullName')}
      />
      
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register('email')}
      />
      
      <Input
        label="Phone Number"
        placeholder="Enter your phone number"
        error={errors.phone?.message}
        {...register('phone')}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Resume (PDF only)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleResumeChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {!resume && (
          <p className="mt-1 text-sm text-red-600">Please upload your resume</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
        <textarea
          {...register('coverLetter')}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Why are you interested in this position? What makes you a good fit?"
        />
        {errors.coverLetter && (
          <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  )
}

export default ApplicationForm