"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie
} from 'recharts'
import { motion } from 'framer-motion'

interface DashboardProps {
  type: 'bar' | 'line' | 'area' | 'pie'
  data: any[]
  title: string
  description?: string
  xAxisKey?: string
  yAxisKey?: string
  colors?: string[]
}

const DEFAULT_COLORS = ['#5c4033', '#8b5a3c', '#1e3a5f', '#d97757', '#a08674']

export function CaseStudyDashboard({ 
  type, 
  data, 
  title, 
  description, 
  xAxisKey = 'name', 
  yAxisKey = 'value',
  colors = DEFAULT_COLORS
}: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12 p-6 md:p-8 bg-white border border-border rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="mb-8">
        <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8e2d8" />
              <XAxis 
                dataKey={xAxisKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b6360', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b6360', fontSize: 12 }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px', 
                  border: '1px solid #d9cfc0',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar dataKey={yAxisKey} radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          ) : type === 'line' ? (
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8e2d8" />
              <XAxis 
                dataKey={xAxisKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b6360', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b6360', fontSize: 12 }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px', 
                  border: '1px solid #d9cfc0'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey={yAxisKey} 
                stroke={colors[0]} 
                strokeWidth={3} 
                dot={{ r: 6, fill: colors[0], strokeWidth: 2, stroke: '#fff' }} 
                activeDot={{ r: 8 }}
              />
            </LineChart>
          ) : type === 'area' ? (
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors[0]} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={colors[0]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8e2d8" />
              <XAxis dataKey={xAxisKey} axisLine={false} tickLine={false} tick={{ fill: '#6b6360', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b6360', fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey={yAxisKey} stroke={colors[0]} fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
            </AreaChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey={yAxisKey}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }}></div>
            <span className="text-xs font-medium text-muted-foreground">{entry[xAxisKey]}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
