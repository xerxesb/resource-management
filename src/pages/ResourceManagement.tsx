import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

type Resource = {
  id: number;
  name: string;
  role: string;
  skills: string[];
  availability: number;
};

const initialResources: Resource[] = [
  { id: 1, name: 'John Doe', role: 'Software Engineer', skills: ['React', 'Node.js'], availability: 80 },
  { id: 2, name: 'Jane Smith', role: 'UX Designer', skills: ['Figma', 'Sketch'], availability: 60 },
  { id: 3, name: 'Mike Johnson', role: 'Project Manager', skills: ['Agile', 'Scrum'], availability: 100 },
];

export const ResourceManagement: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resource Management</h2>
      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search resources..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Resource
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredResources.map((resource) => (
              <tr key={resource.id}>
                <td className="px-6 py-4 whitespace-nowrap">{resource.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{resource.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {resource.skills.map((skill, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {skill}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${resource.availability}%` }}></div>
                    </div>
                    <span>{resource.availability}%</span>
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