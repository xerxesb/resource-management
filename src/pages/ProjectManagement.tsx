import React, { useState } from 'react';
import { Search, Plus, Calendar } from 'lucide-react';

type Project = {
  id: number;
  name: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  startDate: string;
  endDate: string;
  budget: number;
  progress: number;
};

const initialProjects: Project[] = [
  { id: 1, name: 'Website Redesign', status: 'In Progress', startDate: '2023-03-01', endDate: '2023-06-30', budget: 50000, progress: 60 },
  { id: 2, name: 'Mobile App Development', status: 'On Hold', startDate: '2023-02-15', endDate: '2023-08-31', budget: 120000, progress: 30 },
  { id: 3, name: 'Data Migration', status: 'Completed', startDate: '2023-01-01', endDate: '2023-03-31', budget: 75000, progress: 100 },
];

export const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Management</h2>
      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Project
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${project.budget.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span>{project.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};