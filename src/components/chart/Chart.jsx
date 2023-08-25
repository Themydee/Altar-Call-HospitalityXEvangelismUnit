import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: "September", 
    Total: 130,
    New: 80, 
    Red: 50,
  },
  {
    name: "October", 
    Total: 112,
    New: 70, 
    Red: 42,
  },
  {
    name: "November", 
    Total: 213,
    New: 150, 
    Red: 63,
  },
  {
    name: "December", 
    Total: 500,
    New: 384,
    Red: 116
  },
  {
    name: "January", 
    Total: 75,
    New: 43,
    Red: 32,
  },
];

const Chart = ({aspect}) => {
  return (
    <div className='chart'>
      <div className="title"> Converts Data (Last 6 Months)</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="new" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0de761" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#0de761" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b1da1e" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#b1da1e" stopOpacity={0}/>
          </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray' /> 
          <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />

          <Area
            type="monotone"
            dataKey="New"
            stroke="#0de761"
            fillOpacity={1}
            fill="url(#new)"
          />

          <Area
            type="monotone"
            dataKey="Red"
            stroke="#b1da1e"
            fillOpacity={1}
            fill="url(#red)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart