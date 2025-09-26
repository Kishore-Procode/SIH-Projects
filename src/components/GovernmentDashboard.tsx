import React, { useState } from 'react';
import { 
  MapPin, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Building, 
  Shield,
  Download
} from 'lucide-react';

interface GovernmentDashboardProps {
  language: string;
}

export const GovernmentDashboard: React.FC<GovernmentDashboardProps> = ({ language }) => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regionalData = [
    {
      region: 'North District',
      farms: 234,
      avgBiosecurity: 87,
      criticalAlerts: 5,
      complianceRate: 92,
      trend: 'up'
    },
    {
      region: 'South District', 
      farms: 189,
      avgBiosecurity: 79,
      criticalAlerts: 12,
      complianceRate: 85,
      trend: 'down'
    },
    {
      region: 'East District',
      farms: 156,
      avgBiosecurity: 91,
      criticalAlerts: 2,
      complianceRate: 96,
      trend: 'up'
    },
    {
      region: 'West District',
      farms: 201,
      avgBiosecurity: 84,
      criticalAlerts: 8,
      complianceRate: 89,
      trend: 'stable'
    }
  ];

  const policyInsights = [
    {
      title: 'Vaccination Compliance Improvement',
      description: 'AI data shows 15% improvement in vaccination schedules across monitored farms. Recommend expanding AI monitoring program.',
      priority: 'high',
      affectedFarms: 780,
      potentialImpact: 'Reduce disease outbreaks by 25%'
    },
    {
      title: 'Biosecurity Training Gaps',
      description: 'Consistent PPE violations detected in smaller farms. Targeted training programs needed.',
      priority: 'medium',
      affectedFarms: 145,
      potentialImpact: 'Improve overall compliance by 12%'
    },
    {
      title: 'Technology Adoption Incentives',
      description: 'Farms with AI monitoring show 23% better biosecurity scores. Consider subsidy programs.',
      priority: 'medium',
      affectedFarms: 320,
      potentialImpact: 'Increase adoption rate by 40%'
    }
  ];

  const overallStats = [
    {
      label: 'Registered Farms',
      value: '780',
      change: '+23 this month',
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'AI-Monitored Farms', 
      value: '456',
      change: '+67 this month',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Average Compliance',
      value: '90.5%',
      change: '+2.3% this month',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Critical Alerts',
      value: '27',
      change: '-8 from last month',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Regional Oversight Dashboard</h1>
            <p className="text-gray-600">AI-powered biosecurity monitoring and policy insights</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Regions</option>
              <option value="north">North District</option>
              <option value="south">South District</option>
              <option value="east">East District</option>
              <option value="west">West District</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overallStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Regional Performance */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Regional Performance Overview</h3>
          <div className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <h4 className="font-semibold text-gray-900">{region.region}</h4>
                    <span className="text-sm text-gray-500">{region.farms} farms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className={`w-4 h-4 ${
                      region.trend === 'up' ? 'text-green-500' : 
                      region.trend === 'down' ? 'text-red-500' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm font-medium ${
                      region.trend === 'up' ? 'text-green-600' : 
                      region.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {region.trend}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{region.avgBiosecurity}%</p>
                    <p className="text-xs text-gray-500">Avg Biosecurity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{region.complianceRate}%</p>
                    <p className="text-xs text-gray-500">Compliance</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-lg font-bold ${region.criticalAlerts > 10 ? 'text-red-600' : region.criticalAlerts > 5 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {region.criticalAlerts}
                    </p>
                    <p className="text-xs text-gray-500">Critical Alerts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="font-medium text-blue-900">Generate Compliance Report</div>
                <div className="text-sm text-blue-700">Weekly regional overview</div>
              </button>
              <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="font-medium text-green-900">Schedule Farm Inspections</div>
                <div className="text-sm text-green-700">AI-prioritized visits</div>
              </button>
              <button className="w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
                <div className="font-medium text-yellow-900">Alert Trend Analysis</div>
                <div className="text-sm text-yellow-700">Pattern identification</div>
              </button>
              <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="font-medium text-purple-900">Policy Impact Review</div>
                <div className="text-sm text-purple-700">Measure effectiveness</div>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Weekly Highlights</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-blue-700">🎯 Overall compliance improved by 2.1%</p>
              <p className="text-blue-700">📈 456 farms now using AI monitoring (+67)</p>
              <p className="text-blue-700">🚨 Critical alerts reduced by 29%</p>
              <p className="text-blue-700">🏆 East District leads with 96% compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Insights */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI-Generated Policy Insights</h3>
        <div className="space-y-6">
          {policyInsights.map((insight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    insight.priority === 'high' ? 'bg-red-400' : 'bg-yellow-400'
                  }`} />
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{insight.affectedFarms} farms affected</span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{insight.title}</h4>
              <p className="text-gray-600 mb-4">{insight.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600 font-medium">💡 {insight.potentialImpact}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};