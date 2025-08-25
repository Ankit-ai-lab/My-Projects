import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import KPIChart from '../../components/charts/KPIChart'
import CustomBarChart from '../../components/charts/BarChart'

const RecruiterDashboard = () => {
  const { user } = useSelector((state) => state.auth)

  const applicationData = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 49 },
    { name: 'Apr', value: 63 },
    { name: 'May', value: 58 },
    { name: 'Jun', value: 71 },
  ]

  const statusData = [
    { status: 'New', count: 24 },
    { status: 'Review', count: 18 },
    { status: 'Interview', count: 12 },
    { status: 'Rejected', count: 8 },
    { status: 'Hired', count: 5 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="recruiter" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 mt-2">
              Here's your recruiting dashboard overview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPIChart
              title="Total Jobs Posted"
              value="15"
              change="+25%"
              changeType="positive"
              icon="💼"
            />
            <KPIChart
              title="Total Applications"
              value="267"
              change="+18%"
              changeType="positive"
              icon="📄"
            />
            <KPIChart
              title="Interview Rate"
              value="23%"
              change="+5%"
              changeType="positive"
              icon="🎯"
            />
            <KPIChart
              title="Hire Rate"
              value="8%"
              change="+2%"
              changeType="positive"
              icon="✅"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Applications Overview</h2>
              <CustomBarChart
                data={applicationData}
                xAxisKey="name"
                barKey="value"
                color="#3b82f6"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Application Status</h2>
              <div className="space-y-3">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.status}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(item.count / 67) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Johnson', position: 'Frontend Developer', status: 'New', time: '2 hours ago' },
                  { name: 'Mike Chen', position: 'UX Designer', status: 'Review', time: '5 hours ago' },
                  { name: 'Emily Davis', position: 'Product Manager', status: 'Interview', time: '1 day ago' },
                ].map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <div>
                      <h3 className="font-medium">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.position}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        app.status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {app.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{app.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
              <div className="space-y-4">
                {[
                  { candidate: 'John Doe', position: 'Backend Developer', time: 'Today, 2:00 PM' },
                  { candidate: 'Jane Smith', position: 'Data Scientist', time: 'Tomorrow, 10:00 AM' },
                  { candidate: 'Robert Brown', position: 'DevOps Engineer', time: 'Oct 25, 3:30 PM' },
                ].map((interview, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded">
                    <h3 className="font-medium">{interview.candidate}</h3>
                    <p className="text-sm text-gray-600">{interview.position}</p>
                    <p className="text-sm text-blue-600">{interview.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterDashboard
