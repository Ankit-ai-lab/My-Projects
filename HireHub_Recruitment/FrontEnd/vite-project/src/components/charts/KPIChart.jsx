import React from 'react'

const KPIChart = ({ title, value, change, changeType = 'positive', icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-semibold text-gray-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
      {change && (
        <div className="mt-1">
          <span className={`text-sm font-medium ${
            changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'positive' ? '↑' : '↓'} {change}
          </span>
          <span className="text-sm text-gray-500 ml-2">from last week</span>
        </div>
      )}
    </div>
  )
}

export default KPIChart