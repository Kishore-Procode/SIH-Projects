import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Bell, X, Eye } from 'lucide-react';

interface AlertsProps {
  language: string;
}

export const Alerts: React.FC<AlertsProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const alerts = [
    {
      id: 1,
      type: 'critical',
      category: 'Animal Health',
      title: 'Unusual Animal Behavior Detected',
      description: 'AI surveillance detected unusual movement patterns in Barn B, Zone 3. Potential health concern requiring immediate attention.',
      location: 'Barn B - Zone 3',
      timestamp: '2024-01-15 14:30:00',
      status: 'active',
      aiConfidence: 89
    },
    {
      id: 2,
      type: 'warning',
      category: 'Biosecurity',
      title: 'PPE Compliance Violation',
      description: 'Staff member entered feeding area without proper protective equipment. Protocol breach detected via camera surveillance.',
      location: 'Feeding Area - Zone 1',
      timestamp: '2024-01-15 12:15:00',
      status: 'acknowledged',
      aiConfidence: 95
    },
    {
      id: 3,
      type: 'info',
      category: 'Maintenance',
      title: 'Scheduled Vaccination Reminder',
      description: '15 animals due for FMD vaccination within the next 3 days. Schedule veterinary visit.',
      location: 'Multiple Zones',
      timestamp: '2024-01-15 09:00:00',
      status: 'resolved',
      aiConfidence: 100
    },
    {
      id: 4,
      type: 'critical',
      category: 'Hygiene',
      title: 'Sanitization Protocol Missed',
      description: 'Vehicle entry without proper disinfection process. Immediate sanitization required.',
      location: 'Main Gate',
      timestamp: '2024-01-15 08:45:00',
      status: 'active',
      aiConfidence: 92
    },
    {
      id: 5,
      type: 'warning',
      category: 'Environmental',
      title: 'Temperature Anomaly',
      description: 'Temperature in Barn A exceeded optimal range (28°C). Ventilation system check recommended.',
      location: 'Barn A',
      timestamp: '2024-01-15 07:20:00',
      status: 'acknowledged',
      aiConfidence: 78
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Alerts', count: alerts.length },
    { id: 'active', label: 'Active', count: alerts.filter(a => a.status === 'active').length },
    { id: 'acknowledged', label: 'Acknowledged', count: alerts.filter(a => a.status === 'acknowledged').length },
    { id: 'resolved', label: 'Resolved', count: alerts.filter(a => a.status === 'resolved').length }
  ];

  const filteredAlerts = activeFilter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.status === activeFilter);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Bell className="w-5 h-5 text-blue-500" />;
    }
  };

  const getAlertBgColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-l-red-500 bg-red-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="w-4 h-4 text-red-500" />;
      case 'acknowledged':
        return <Eye className="w-4 h-4 text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: 'white' }}>.</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-Time Alerts</h1>
        <p className="text-gray-600">AI-powered monitoring and instant notifications</p>
      </div>

      {/* Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {filterOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`text-left p-6 rounded-xl border transition-all ${
              activeFilter === filter.id
                ? 'border-green-200 bg-green-50 shadow-md'
                : 'border-gray-200 bg-white hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-2xl font-bold text-gray-900">{filter.count}</p>
              {filter.id === 'active' && <Clock className="w-5 h-5 text-red-500" />}
              {filter.id === 'acknowledged' && <Eye className="w-5 h-5 text-yellow-500" />}
              {filter.id === 'resolved' && <CheckCircle className="w-5 h-5 text-green-500" />}
              {filter.id === 'all' && <Bell className="w-5 h-5 text-blue-500" />}
            </div>
            <p className="text-sm font-medium text-gray-600">{filter.label}</p>
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 rounded-lg p-6 ${getAlertBgColor(alert.type)} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {alert.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(alert.status)}
                      <span className="text-xs font-medium text-gray-600 capitalize">
                        {alert.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{alert.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>📍 {alert.location}</span>
                    <span>⏰ {new Date(alert.timestamp).toLocaleString()}</span>
                    <span className="flex items-center space-x-1">
                      <span>🤖 AI Confidence:</span>
                      <span className="font-medium">{alert.aiConfidence}%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {alert.status === 'active' && (
                  <>
                    <button className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition-colors">
                      Acknowledge
                    </button>
                    <button className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
                      Resolve
                    </button>
                  </>
                )}
                {alert.status === 'acknowledged' && (
                  <button className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
                    Mark Resolved
                  </button>
                )}
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No alerts found</h3>
          <p className="text-gray-500">
            {activeFilter === 'all' 
              ? 'All systems are running smoothly!' 
              : `No ${activeFilter} alerts at the moment.`}
          </p>
        </div>
      )}

      {/* Alert Settings */}
      <div className="mt-12 bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Notification Preferences</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">SMS notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Email alerts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Push notifications</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Alert Sensitivity</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="sensitivity" className="border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">High (85%+ confidence)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="sensitivity" defaultChecked className="border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Medium (70%+ confidence)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="sensitivity" className="border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Low (50%+ confidence)</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Priority Categories</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Animal Health</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Biosecurity</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-gray-700">Environmental</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};