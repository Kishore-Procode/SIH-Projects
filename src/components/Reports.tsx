import React, { useState } from 'react';
import { BarChart3, TrendingUp, Download, Calendar, Shield, AlertTriangle } from 'lucide-react';

interface ReportsProps {
  language: string;
}

export const Reports: React.FC<ReportsProps> = ({ language }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const biosecurityTrends = [
    { week: 'Week 1', score: 85, alerts: 5 },
    { week: 'Week 2', score: 88, alerts: 3 },
    { week: 'Week 3', score: 92, alerts: 2 },
    { week: 'Week 4', score: 87, alerts: 4 },
  ];

  const recommendations = [
    {
      priority: 'high',
      category: 'Biosecurity',
      title: 'Improve Entry Point Sanitization',
      description: 'AI detected inconsistent sanitization protocols at vehicle entry points. Recommend automated disinfection system.',
      impact: 'Could improve biosecurity score by 8-12%'
    },
    {
      priority: 'medium',
      category: 'Animal Health',
      title: 'Monitor Feed Quality',
      description: 'Feed consumption patterns suggest potential quality variations. Consider feed testing.',
      impact: 'Preventive measure for animal health'
    },
    {
      priority: 'low',
      category: 'Operations',
      title: 'Optimize Staff Schedules',
      description: 'Peak activity times analysis shows opportunity for better resource allocation.',
      impact: 'Improve operational efficiency by 5-8%'
    }
  ];

  const complianceMetrics = [
    { metric: 'PPE Usage Compliance', value: 94, target: 95, status: 'good' },
    { metric: 'Sanitization Protocols', value: 87, target: 90, status: 'warning' },
    { metric: 'Visitor Registration', value: 98, target: 95, status: 'excellent' },
    { metric: 'Feed Quality Checks', value: 92, target: 90, status: 'excellent' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: 'white' }}>.</h1>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Biosecurity Reports</h1>
            <p className="text-gray-600">AI-generated insights and compliance analysis</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Current Week Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">87%</p>
            <p className="text-sm font-medium text-gray-600">Biosecurity Score</p>
            <p className="text-xs text-green-600 mt-1">+5% from last week</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">98%</p>
            <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
            <p className="text-xs text-blue-600 mt-1">Meeting targets</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">3</p>
            <p className="text-sm font-medium text-gray-600">Active Alerts</p>
            <p className="text-xs text-yellow-600 mt-1">-2 from last week</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">Good</p>
            <p className="text-sm font-medium text-gray-600">Overall Trend</p>
            <p className="text-xs text-purple-600 mt-1">Improving</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Biosecurity Trends Chart */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Biosecurity Score Trends</h3>
          <div className="space-y-4">
            {biosecurityTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{trend.week}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${trend.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-12">{trend.score}%</span>
                  <span className="text-xs text-gray-500 w-16">{trend.alerts} alerts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Metrics */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Metrics</h3>
          <div className="space-y-4">
            {complianceMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">{metric.value}%</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      metric.status === 'excellent' ? 'bg-green-100 text-green-700' :
                      metric.status === 'good' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        metric.value >= metric.target ? 'bg-green-500' : 
                        metric.value >= metric.target - 5 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(metric.value, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">Target: {metric.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI-Generated Recommendations</h3>
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    rec.priority === 'high' ? 'bg-red-400' :
                    rec.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                  }`} />
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                      rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </span>
                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {rec.category}
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h4>
              <p className="text-gray-600 mb-3">{rec.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-600 font-medium">{rec.impact}</p>
                <button className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};