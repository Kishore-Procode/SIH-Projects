import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Heart,
  Users,
  Thermometer,
  Droplets
} from 'lucide-react';

interface DashboardProps {
  language: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  const [biosecurityScore, setBiosecurityScore] = useState(87);
  const [alertCount, setAlertCount] = useState(3);
  const [animalCount, setAnimalCount] = useState(245);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setBiosecurityScore(prev => prev + (Math.random() - 0.5) * 2);
      setAlertCount(prev => Math.max(0, prev + (Math.random() > 0.8 ? 1 : -1)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Biosecurity Score',
      value: `${Math.round(biosecurityScore)}%`,
      icon: Shield,
      color: biosecurityScore > 80 ? 'text-green-600' : biosecurityScore > 60 ? 'text-yellow-600' : 'text-red-600',
      bgColor: biosecurityScore > 80 ? 'bg-green-100' : biosecurityScore > 60 ? 'bg-yellow-100' : 'bg-red-100',
      trend: '+5% from last week'
    },
    {
      label: 'Active Alerts',
      value: alertCount.toString(),
      icon: AlertTriangle,
      color: alertCount === 0 ? 'text-green-600' : alertCount < 5 ? 'text-yellow-600' : 'text-red-600',
      bgColor: alertCount === 0 ? 'bg-green-100' : alertCount < 5 ? 'bg-yellow-100' : 'bg-red-100',
      trend: alertCount === 0 ? 'All clear' : 'Needs attention'
    },
    {
      label: 'Total Animals',
      value: animalCount.toString(),
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '+12 this month'
    },
    {
      label: 'AI Cameras Active',
      value: '8/8',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: '100% operational'
    }
  ];

  const recentActivity = [
    { time: '2 mins ago', event: 'Feeding schedule completed - Zone A', status: 'success' },
    { time: '15 mins ago', event: 'Visitor logged entry - Veterinarian', status: 'info' },
    { time: '1 hour ago', event: 'Temperature anomaly detected - Barn 3', status: 'warning' },
    { time: '3 hours ago', event: 'Vaccination record updated - 15 animals', status: 'success' },
  ];

  const environmentalData = [
    { label: 'Temperature', value: '24°C', icon: Thermometer, status: 'optimal' },
    { label: 'Humidity', value: '65%', icon: Droplets, status: 'optimal' },
    { label: 'Air Quality', value: 'Good', icon: Activity, status: 'optimal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: 'white' }}>.</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Farm Overview</h1>
        <p className="text-gray-600">Real-time monitoring and biosecurity management</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className={`text-xs ${stat.color}`}>{stat.trend}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-400' :
                    activity.status === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Monitoring */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Status</h3>
            <div className="space-y-4">
              {environmentalData.map((data, index) => {
                const Icon = data.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">{data.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-gray-900">{data.value}</span>
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">AI Insights</h3>
            </div>
            <p className="text-sm text-green-700 mb-3">
              Your farm's biosecurity compliance is excellent this week. The AI system detected optimal feeding patterns and no hygiene violations.
            </p>
            <button className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors">
              View detailed analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};