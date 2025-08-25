import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import KPIChart from '../../components/charts/KPIChart'

const CandidateDashboard = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 mt-2">
              Here's what's happening with your job search today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPIChart
              title="Applications Sent"
              value="12"
              change="+20%"
              changeType="positive"
              icon="📄"
            />
            <KPIChart
              title="Interviews"
              value="3"
              change="+50%"
              changeType="positive"
              icon="🎯"
            />
            <KPIChart
              title="Profile Views"
              value="24"
              change="+14%"
              changeType="positive"
              icon="👀"
            />
            <KPIChart
              title="Saved Jobs"
              value="8"
              change="+0%"
              changeType="neutral"
              icon="💼"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">Frontend Developer</h3>
                    <p className="text-sm text-gray-600">Google • Applied 2 days ago</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    In Review
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">UX Designer</h3>
                    <p className="text-sm text-gray-600">Apple • Applied 1 week ago</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                    Interview
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded">
                  <h3 className="font-medium">UX Designer at Apple</h3>
                  <p className="text-sm text-gray-600">Tomorrow • 2:00 PM - 3:00 PM</p>
                  <p className="text-sm text-gray-600">Video Call</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <h3 className="font-medium">Frontend Developer at Google</h3>
                  <p className="text-sm text-gray-600">Next Monday • 10:00 AM - 11:00 AM</p>
                  <p className="text-sm text-gray-600">On-site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateDashboard