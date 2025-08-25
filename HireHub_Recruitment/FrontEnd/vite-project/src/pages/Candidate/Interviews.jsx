import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Badge from '../../components/ui/Badge'

const Interviews = () => {
  const interviews = [
    {
      id: 1,
      jobTitle: 'UX Designer',
      company: 'Apple',
      type: 'Technical',
      date: '2023-10-20',
      time: '14:00 - 15:00',
      status: 'scheduled',
      interviewer: 'Sarah Johnson',
      mode: 'Video Call',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Google',
      type: 'Cultural',
      date: '2023-10-25',
      time: '10:00 - 11:00',
      status: 'scheduled',
      interviewer: 'Mike Chen',
      mode: 'On-site',
    },
    {
      id: 3,
      jobTitle: 'Product Manager',
      company: 'Microsoft',
      type: 'Final',
      date: '2023-10-18',
      time: '13:30 - 14:30',
      status: 'completed',
      interviewer: 'Emily Davis',
      mode: 'Video Call',
    },
  ]

  const getStatusVariant = (status) => {
    return status === 'scheduled' ? 'primary' : 'success'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Interviews</h1>
            <p className="text-gray-600">Manage your upcoming and past interviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.map((interview) => (
              <div key={interview.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{interview.jobTitle}</h3>
                    <p className="text-gray-600">{interview.company}</p>
                  </div>
                  <Badge variant={getStatusVariant(interview.status)}>
                    {interview.status}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Type:</span>
                    <p className="font-medium">{interview.type} Interview</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Date & Time:</span>
                    <p className="font-medium">{interview.date} • {interview.time}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Interviewer:</span>
                    <p className="font-medium">{interview.interviewer}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Mode:</span>
                    <p className="font-medium">{interview.mode}</p>
                  </div>
                </div>

                <div className="mt-6 space-x-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    Join Meeting
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Interviews Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Interviews</h2>
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
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feedback
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Product Manager
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Microsoft
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      2023-10-18
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="success">Passed</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-600 hover:text-blue-900">
                        View Feedback
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interviews