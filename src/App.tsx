import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Surveillance } from './components/Surveillance';
import { Records } from './components/Records';
import { Reports } from './components/Reports';
import { Alerts } from './components/Alerts';
import { GovernmentDashboard } from './components/GovernmentDashboard';
import Overlay from './components/overlay';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState<'farmer' | 'government'>('farmer');
  const [language, setLanguage] = useState('en');
  const [showOverlay, setShowOverlay] = useState(true);

  const renderContent = () => {
    if (userRole === 'government') {
      return <GovernmentDashboard language={language} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard language={language} />;
      case 'surveillance':
        return <Surveillance language={language} />;
      case 'records':
        return <Records language={language} />;
      case 'reports':
        return <Reports language={language} />;
      case 'alerts':
        return <Alerts language={language} />;
      default:
        return <Dashboard language={language} />;
    }
  };

  return (
    <>
      {/* {showOverlay && (
        <Overlay onClose={() => setShowOverlay(false)} />
      )} */}

      <div className="min-h-screen bg-gray-50">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userRole={userRole}
          setUserRole={setUserRole}
          language={language}
          setLanguage={setLanguage}
        />
        <main className="pt-16">
          {renderContent()}
        </main>
      </div>
    </>
  );
}

export default App;
