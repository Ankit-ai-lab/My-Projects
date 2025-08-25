import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState('active')

  const jobs = {
    active: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Google',
        location: 'Mountain View, CA',
        type: 'full-time',
        applications: 24,
        status: 'active',
        posted: '2023-10-15',
      },
      {
        id: 2,
        title: 'UX Designer',
        company: 'Apple',
        location: 'Cupertino, CA',
        type: 'full-time',
        applications: 18,
        status: 'active',
        posted: '2023-10-10',
      },
    ],
    draft: [
      {
        id: 3,
        title: 'Backend Engineer',
        company: 'Amazon',
        location: 'Seattle, WA',
        type: 'full-time',
        applications: 0,
        status: 'draft',
        posted: '2023-10-05',
      },
    ],
    closed: [
      {
        id: 4,
        title: 'Product Manager',
        company: 'Microsoft',
        location: 'Redmond, WA',
        type: 'full-time',
        applications: 42,
        status: 'closed',
        posted: '2023-09-20',
      },
    ],
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case 'active': return 'success'
      case 'draft': return 'warning'
      case 'closed': return 'danger'
      default: return 'default'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="recruiter" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Job Postings</h1>
              <p className="text-gray-600">Manage your job listings and track applications</p>
            </div>
            <Link to="/recruiter/post-job">
              <Button variant="primary">+ Post New Job</Button>
            </Link>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['active', 'draft', 'closed'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {jobs[tab].length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Jobs List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applications
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs[activeTab].map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.applications}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={getStatusVariant(job.status)}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.posted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {jobs[activeTab].length === 0 && (
            <div className="text-center py-12">
              <div className="text-2xl font-semibold text-gray-500 mb-2">
                No {activeTab} jobs
              </div>
              <p className="text-gray-400">
                {activeTab === 'active'
                  ? 'Get started by posting your first job!'
                  : `You don't have any ${activeTab} jobs at the moment.`}
              </p>
              {activeTab === 'active' && (
                <Link to="/recruiter/post-job">
                  <Button variant="primary" className="mt-4">
                    Post a Job
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyJobs