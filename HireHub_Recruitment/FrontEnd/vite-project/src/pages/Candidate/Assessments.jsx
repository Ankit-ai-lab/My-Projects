import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('pending')

  const assessments = {
    pending: [
      {
        id: 1,
        title: 'Frontend Development Skills Test',
        company: 'Google',
        duration: '60 minutes',
        skills: ['React', 'JavaScript', 'CSS'],
        dueDate: '2023-10-25',
      },
      {
        id: 2,
        title: 'Problem Solving Assessment',
        company: 'Amazon',
        duration: '45 minutes',
        skills: ['Algorithms', 'Data Structures'],
        dueDate: '2023-10-22',
      },
    ],
    completed: [
      {
        id: 3,
        title: 'UX Design Challenge',
        company: 'Apple',
        duration: '90 minutes',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        completedDate: '2023-10-15',
        score: 85,
        status: 'passed',
      },
      {
        id: 4,
        title: 'Backend API Design',
        company: 'Microsoft',
        duration: '75 minutes',
        skills: ['Node.js', 'REST', 'Database'],
        completedDate: '2023-10-10',
        score: 72,
        status: 'failed',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="candidate" />
        <div className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Skill Assessments</h1>
            <p className="text-gray-600">Complete assessments to showcase your skills to employers</p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pending'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Pending Assessments
                  <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {assessments.pending.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'completed'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Completed Assessments
                </button>
              </nav>
            </div>
          </div>

          {/* Assessment List */}
          <div className="grid grid-cols-1 gap-6">
            {assessments[activeTab].map((assessment) => (
              <div key={assessment.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
                    <p className="text-gray-600">{assessment.company}</p>
                  </div>
                  {activeTab === 'completed' && (
                    <Badge variant={assessment.status === 'passed' ? 'success' : 'danger'}>
                      {assessment.status === 'passed' ? `Score: ${assessment.score}%` : 'Failed'}
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Duration:</span>
                    <p className="font-medium">{assessment.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">
                      {activeTab === 'pending' ? 'Due Date:' : 'Completed:'}
                    </span>
                    <p className="font-medium">
                      {activeTab === 'pending' ? assessment.dueDate : assessment.completedDate}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-500">Skills Tested:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {assessment.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {activeTab === 'pending' ? (
                  <Button variant="primary">Start Assessment</Button>
                ) : (
                  <div className="flex space-x-3">
                    <Button variant="outline">View Results</Button>
                    <Button variant="primary">Retake Assessment</Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {activeTab === 'pending' && assessments.pending.length === 0 && (
            <div className="text-center py-12">
              <div className="text-2xl font-semibold text-gray-500 mb-2">No pending assessments</div>
              <p className="text-gray-400">You're all caught up! New assessments will appear here when assigned.</p>
            </div>
          )}

          {activeTab === 'completed' && assessments.completed.length === 0 && (
            <div className="text-center py-12">
              <div className="text-2xl font-semibold text-gray-500 mb-2">No completed assessments</div>
              <p className="text-gray-400">Complete your pending assessments to see results here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Assessments