import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomLineChart = ({ data, xAxisKey, lineKey, color = '#3b82f6' }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={lineKey} stroke={color} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart