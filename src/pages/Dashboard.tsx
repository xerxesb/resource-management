import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Briefcase, DollarSign, Clock } from 'lucide-react';

const data = [
  { name: 'Project A', Utilization: 80 },
  { name: 'Project B', Utilization: 65 },
  { name: 'Project C', Utilization: 90 },
  { name: 'Project D', Utilization: 75 },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard icon={<Users className="h-8 w-8 text-blue-500" />} title="Total Resources" value="150" />
        <DashboardCard icon={<Briefcase className="h-8 w-8 text-green-500" />} title="Active Projects" value="12" />
        <DashboardCard icon={<DollarSign className="h-8 w-8 text-yellow-500" />} title="Total Budget" value="$1.2M" />
        <DashboardCard icon={<Clock className="h-8 w-8 text-purple-500" />} title="Avg. Utilization" value="78%" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Resource Utilization by Project</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Utilization" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);