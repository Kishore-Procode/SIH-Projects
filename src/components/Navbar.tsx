import React from 'react';
import { 
  Home, 
  Camera, 
  FileText, 
  BarChart3, 
  AlertTriangle, 
  Users, 
  Globe,
  Settings
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: 'farmer' | 'government' | 'User';
  setUserRole: (role: 'farmer' | 'government'| 'User') => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  language,
  setLanguage,
}) => {
  const farmerTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'surveillance', label: 'AI Watch', icon: Camera },
    { id: 'records', label: 'Records', icon: FileText },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Hi,Farmer</span>
            </div>
          </div>

          {userRole === 'farmer' && (
            <div className="hidden md:flex items-center space-x-1">
              {farmerTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-green-100 text-green-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUserRole('farmer')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  userRole === 'farmer'
                    ? 'bg-white text-green-700 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Farmer
              </button>
              <button
                onClick={() => setUserRole('government')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  userRole === 'government'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Government
              </button>
            </div>
          </div>
        </div>

        {userRole === 'farmer' && (
          <div className="md:hidden flex overflow-x-auto space-x-1 pb-3">
            {farmerTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};