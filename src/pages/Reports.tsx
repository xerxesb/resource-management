import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const resourceUtilizationData = [
  { name: 'John Doe', utilization: 85 },
  { name: 'Jane Smith', utilization: 72 },
  { name: 'Mike Johnson', utilization: 93 },
  { name: 'Emily Brown', utilization: 68 },
  { name: 'David Lee', utilization: 79 },
];

const projectProgressData = [
  { name: 'Website Redesign', completed: 60, remaining: 40 },
  { name: 'Mobile App Development', completed: 30, remaining: 70 },
  { name: 'Data Migration', completed: 100, remaining: 0 },
  { name: 'CRM Implementation', completed: 45, remaining: 55 },
];

export const Reports: React.FC = () => {
  const [activeTab, setActiveTab] = useState('resource');

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reports</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`${
                activeTab === 'resource'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('resource')}
            >
              Resource Utilization
            </button>
            <button
              className={`${
                activeTab === 'project'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('project')}
            >
              Project Progress
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'resource' ? (
            <ResourceUtilizationChart data={resourceUtilizationData} />
          ) : (
            <ProjectProgressChart data={projectProgressData} />
          )}
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceUtilizationChart: React.FC<{ data: any[] }> = ({ data }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Resource Utilization</h3>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="utilization" fill="#3b82f6" name="Utilization %" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const ProjectProgressChart: React.FC<{ data: any[] }> = ({ data }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Progress</h3>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#3b82f6" name="Completed %" />
        <Bar dataKey="remaining" stackId="a" fill="#e5e7eb" name="Remaining %" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);