import React, { useState } from 'react';
import { Camera, Play, Pause, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

interface SurveillanceProps {
  language: string;
}

export const Surveillance: React.FC<SurveillanceProps> = ({ language }) => {
  const [selectedCamera, setSelectedCamera] = useState(0);

  const cameras = [
    { 
      id: 1, 
      name: 'Barn A - Entrance', 
      status: 'active', 
      aiDetections: ['Proper PPE Usage', 'Sanitization Complete'],
      alerts: []
    },
    { 
      id: 2, 
      name: 'Feeding Area - Zone 1', 
      status: 'active', 
      aiDetections: ['Normal Feeding Behavior', 'Clean Water Troughs'],
      alerts: ['Low feed level detected']
    },
    { 
      id: 3, 
      name: 'Barn B - Main Hall', 
      status: 'active', 
      aiDetections: ['Healthy Animal Movement', 'Temperature Normal'],
      alerts: []
    },
    { 
      id: 4, 
      name: 'Isolation Area', 
      status: 'active', 
      aiDetections: ['Area Secure', 'No Unauthorized Entry'],
      alerts: []
    },
    { 
      id: 5, 
      name: 'Vehicle Entry Gate', 
      status: 'active', 
      aiDetections: ['Disinfection Protocol Active'],
      alerts: ['Vehicle requires sanitization']
    },
    { 
      id: 6, 
      name: 'Feed Storage', 
      status: 'maintenance', 
      aiDetections: [],
      alerts: ['Camera offline for maintenance']
    }
  ];

  const aiInsights = [
    {
      type: 'positive',
      message: 'Excellent compliance with biosecurity protocols detected in the last 24 hours',
      confidence: '94%'
    },
    {
      type: 'warning', 
      message: 'Unusual animal clustering observed in Barn B - monitoring closely',
      confidence: '78%'
    },
    {
      type: 'positive',
      message: 'All staff following proper PPE usage protocols',
      confidence: '96%'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: 'white' }}>.</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Surveillance Center</h1>
        <p className="text-gray-600">Real-time monitoring with AI-powered detection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Camera List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Camera Feeds</h3>
            <div className="space-y-3">
              {cameras.map((camera, index) => (
                <button
                  key={camera.id}
                  onClick={() => setSelectedCamera(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedCamera === index
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 text-sm">{camera.name}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      camera.status === 'active' ? 'bg-green-400' : 
                      camera.status === 'maintenance' ? 'bg-yellow-400' : 'bg-red-400'
                    }`} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500 capitalize">{camera.status}</span>
                  </div>
                  {camera.alerts.length > 0 && (
                    <div className="mt-2 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs text-yellow-600">
                        {camera.alerts.length} alert{camera.alerts.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Video Feed */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cameras[selectedCamera]?.name}
                </h3>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Play className="w-4 h-4" />
                    <span>Live</span>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Feed Area */}
            <div className="relative bg-gray-900 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium mb-2">Live Feed - {cameras[selectedCamera]?.name}</p>
                  <p className="text-sm text-gray-400">AI monitoring active</p>
                </div>
              </div>
              
              {/* AI Detection Overlay */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">AI Analysis Active</span>
                </div>
                {cameras[selectedCamera]?.aiDetections.map((detection, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>{detection}</span>
                  </div>
                ))}
              </div>

              {/* Alert Overlay */}
              {cameras[selectedCamera]?.alerts.length > 0 && (
                <div className="absolute top-4 right-4 bg-yellow-500 bg-opacity-90 text-white p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Alert</span>
                  </div>
                  {cameras[selectedCamera]?.alerts.map((alert, index) => (
                    <p key={index} className="text-xs">{alert}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Insights & Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiInsights.map((insight, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${
                    insight.type === 'positive' 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-yellow-200 bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {insight.type === 'positive' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    )}
                    <span className={`text-sm font-medium ${
                      insight.type === 'positive' ? 'text-green-800' : 'text-yellow-800'
                    }`}>
                      {insight.confidence} Confidence
                    </span>
                  </div>
                  <p className={`text-sm ${
                    insight.type === 'positive' ? 'text-green-700' : 'text-yellow-700'
                  }`}>
                    {insight.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};