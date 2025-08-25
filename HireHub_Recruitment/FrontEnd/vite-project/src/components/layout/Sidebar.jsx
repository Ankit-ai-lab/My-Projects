import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ role }) => {
  const location = useLocation()

  const candidateMenu = [
    { path: '/candidate/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/candidate/jobs', label: 'Browse Jobs', icon: '🔍' },
    { path: '/candidate/applications', label: 'My Applications', icon: '📄' },
    { path: '/candidate/interviews', label: 'Interviews', icon: '🎯' },
    { path: '/candidate/assessments', label: 'Assessments', icon: '📝' },
    { path: '/candidate/profile', label: 'Profile', icon: '👤' },
  ]

  const recruiterMenu = [
    { path: '/recruiter/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/recruiter/post-job', label: 'Post Job', icon: '➕' },
    { path: '/recruiter/my-jobs', label: 'My Jobs', icon: '💼' },
    { path: '/recruiter/applications', label: 'Applications', icon: '📄' },
    { path: '/recruiter/interviews', label: 'Interviews', icon: '🎯' },
    { path: '/recruiter/assessments', label: 'Assessments', icon: '📝' },
    { path: '/recruiter/referrals', label: 'Referrals', icon: '👥' },
    { path: '/recruiter/analytics', label: 'Analytics', icon: '📊' },
    { path: '/recruiter/profile', label: 'Profile', icon: '👤' },
  ]

  const adminMenu = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/admin/users', label: 'Users', icon: '👥' },
    { path: '/admin/jobs', label: 'Jobs', icon: '💼' },
    { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  const menuItems = role === 'candidate' ? candidateMenu : 
                   role === 'recruiter' ? recruiterMenu : 
                   role === 'admin' ? adminMenu : []

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 overflow-y-auto pt-16">
      <div className="p-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
          {role === 'candidate' ? 'Candidate' : 
           role === 'recruiter' ? 'Recruiter' : 
           role === 'admin' ? 'Admin' : ''} Navigation
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive(item.path)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar