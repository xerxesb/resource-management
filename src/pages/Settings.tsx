import React, { useState } from 'react';
import { Save } from 'lucide-react';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    companyName: 'Acme Inc.',
    email: 'admin@acme.com',
    notificationsEnabled: true,
    dataRetentionDays: 90,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the settings to your backend
    console.log('Settings saved:', settings);
    // Show a success message to the user
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={settings.companyName}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Admin Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notificationsEnabled" className="flex items-center">
              <input
                type="checkbox"
                id="notificationsEnabled"
                name="notificationsEnabled"
                checked={settings.notificationsEnabled}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Enable email notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="dataRetentionDays" className="block text-sm font-medium text-gray-700">
              Data Retention Period (days)
            </label>
            <input
              type="number"
              id="dataRetentionDays"
              name="dataRetentionDays"
              value={settings.dataRetentionDays}
              onChange={handleInputChange}
              min="1"
              max="365"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};