import React from 'react';
import { Pie, PieChart, Cell, Legend } from "recharts";

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

const data = [
    {
        status: 'Completed',
        percentage: 75
    },
    {
        status: 'Incomplete',
        percentage: 25
    },
];

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="middle"
      className="text-sm font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
    return (
        <div className="w-full max-w-md mx-auto p-4">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={CustomLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="percentage"
                    nameKey="status"
                >
                    {data.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]}
                            className="hover:opacity-80 transition-opacity"
                        />
                    ))}
                </Pie>
                <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    className="text-sm"
                />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;