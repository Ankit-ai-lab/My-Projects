import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../ui/Input'
import Button from '../ui/Button'

const jobSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  company: z.string().min(2, 'Company name is required'),
  location: z.string().min(2, 'Location is required'),
  type: z.enum(['full-time', 'part-time', 'contract', 'internship']),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  requirements: z.string().min(20, 'Requirements must be at least 20 characters'),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  salary: z.string().optional(),
  applicationDeadline: z.string().min(1, 'Application deadline is required'),
})

const JobForm = ({ onSubmit, isLoading, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(jobSchema),
    defaultValues: initialData || {
      type: 'full-time',
      skills: [],
    },
  })

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim())
    setValue('skills', skills)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Job Title"
        placeholder="e.g. Senior Frontend Developer"
        error={errors.title?.message}
        {...register('title')}
      />
      
      <Input
        label="Company"
        placeholder="Company name"
        error={errors.company?.message}
        {...register('company')}
      />
      
      <Input
        label="Location"
        placeholder="e.g. Remote, New York, NY"
        error={errors.location?.message}
        {...register('location')}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
        <select
          {...register('type')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
        {errors.type && (
          <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
        )}
      </div>
      
      <Input
        label="Salary Range (optional)"
        placeholder="e.g. $80,000 - $120,000"
        error={errors.salary?.message}
        {...register('salary')}
      />
      
      <Input
        label="Application Deadline"
        type="date"
        error={errors.applicationDeadline?.message}
        {...register('applicationDeadline')}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills (comma separated)</label>
        <input
          placeholder="e.g. React, JavaScript, CSS, TypeScript"
          onChange={handleSkillsChange}
          defaultValue={initialData?.skills?.join(', ')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.skills && (
          <p className="mt-1 text-sm text-red-600">{errors.skills.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
        <textarea
          {...register('description')}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe the job responsibilities, expectations, etc."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
        <textarea
          {...register('requirements')}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="List the requirements and qualifications needed"
        />
        {errors.requirements && (
          <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Saving...' : initialData ? 'Update Job' : 'Post Job'}
      </Button>
    </form>
  )
}

export default JobForm