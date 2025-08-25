import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../ui/Input'
import Button from '../ui/Button'

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  role: z.enum(['candidate', 'recruiter']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const SignupForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          placeholder="Enter your first name"
          error={errors.firstName?.message}
          {...register('firstName')}
        />
        
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          error={errors.lastName?.message}
          {...register('lastName')}
        />
      </div>
      
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register('email')}
      />
      
      <Input
        label="Password"
        type="password"
        placeholder="Create a password"
        error={errors.password?.message}
        {...register('password')}
      />
      
      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">I want to:</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="candidate"
              {...register('role')}
              className="mr-2"
            />
            <span>Find a Job</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="recruiter"
              {...register('role')}
              className="mr-2"
            />
            <span>Hire Candidates</span>
          </label>
        </div>
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>
      
      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create Account'}
      </Button>
    </form>
  )
}

export default SignupForm   