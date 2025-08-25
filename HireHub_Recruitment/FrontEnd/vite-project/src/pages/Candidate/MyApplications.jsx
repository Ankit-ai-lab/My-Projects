import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Badge from '../../components/ui/Badge'

const MyApplications = () => {
  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'Google',
      status: 'in_review',
      statusText: 'In Review',
      appliedDate: '2023-10-15',
      matchScore: 85,
    },
    {
      id: 2,
      jobTitle: 'UX Designer',
      company: 'Apple',
      status: 'interview',
      statusText: 'Interview',
      appliedDate: '2023-10-10',
      matchScore: 92,
    },
    {
      id: 3,
      jobTitle: 'Backend Engineer',
      company: 'Amazon',
      status: 'rejected',
      statusText: 'Rejected',
      appliedDate: '2023-10-05',
      matchScore: 78,
    },
    {
      id: 4,
      jobTitle: 'Product Manager',
      company: 'Microsoft',
      status: 'offer',
      statusText: 'Offer',
      appliedDate: '2023-10-01',
      matchScore: 95,
    },
  ]

  const getStatusVariant = (status) => {
    switch (status) {
      case 'in_review': return 'primary'
      case 'interview': return 'warning'
      case 'offer': return 'success'
      case 'rejected': return 'danger'
      default: return 'default'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
            <p className="text-gray-600">Track the status of your job applications</p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Match Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{application.jobTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.appliedDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${application.matchScore}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">{application.matchScore}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={getStatusVariant(application.status)}>
                        {application.statusText}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        View
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApplications