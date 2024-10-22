import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ResourceManagement } from './pages/ResourceManagement';
import { ProjectManagement } from './pages/ProjectManagement';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Bookings } from './pages/Bookings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/resources" element={<ResourceManagement />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;