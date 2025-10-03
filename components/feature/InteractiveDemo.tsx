'use client';

import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface InteractiveDemoProps {
  demo: {
    title: string;
    description: string;
    type: 'calculator' | 'simulator' | 'configurator' | 'preview';
    component: string;
    data?: any;
  };
}

export function InteractiveDemo({ demo }: InteractiveDemoProps) {
  const [isActive, setIsActive] = useState(false);

  const renderDemoComponent = () => {
    switch (demo.component) {
      case 'AutomationBuilder':
        return <AutomationBuilderDemo data={demo.data || {}} />;
      case 'AnalyticsDashboard':
        return <AnalyticsDashboardDemo data={demo.data || {}} />;
      default:
        return <DefaultDemo type={demo.type} />;
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {demo.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {demo.description}
          </p>
        </div>

        <Card variant="elevated" className="p-8">
          {!isActive ? (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Try It Yourself
                </h3>
                <p className="text-gray-600">
                  Click the button below to launch the interactive demo
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={() => setIsActive(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Launch Demo
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Interactive Demo
                </h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsActive(false)}
                >
                  Close Demo
                </Button>
              </div>
              {renderDemoComponent()}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}

// Demo Components
function AutomationBuilderDemo({ data }: { data: Record<string, unknown> }) {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState('');

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose a Template
          </label>
          <select 
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a template...</option>
            {data?.templates?.map((template: string) => (
              <option key={template} value={template}>
                {template.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Integration
          </label>
          <select 
            value={selectedIntegration}
            onChange={(e) => setSelectedIntegration(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select integration...</option>
            {data?.integrations?.map((integration: string) => (
              <option key={integration} value={integration}>
                {integration.charAt(0).toUpperCase() + integration.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedTemplate && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">
            Template: {selectedTemplate.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h4>
          <p className="text-blue-800 text-sm">
            This template will help you automate your {selectedTemplate.replace('-', ' ')} process.
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Create Automation
        </Button>
      </div>
    </div>
  );
}

function AnalyticsDashboardDemo({ data }: { data: Record<string, unknown> }) {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    { id: 'revenue', name: 'Revenue', value: '$125,430', change: '+12.5%' },
    { id: 'leads', name: 'New Leads', value: '1,234', change: '+8.2%' },
    { id: 'conversion', name: 'Conversion Rate', value: '23.4%', change: '+2.1%' },
    { id: 'deals', name: 'Closed Deals', value: '89', change: '+15.3%' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div 
            key={metric.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
              selectedMetric === metric.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedMetric(metric.id)}
          >
            <div className="text-sm font-medium text-gray-600">{metric.name}</div>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-green-600">{metric.change}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h4 className="font-semibold text-gray-900 mb-4">
          {metrics.find(m => m.id === selectedMetric)?.name} Analytics
        </h4>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-400 mb-2">
              {metrics.find(m => m.id === selectedMetric)?.value}
            </div>
            <div className="text-gray-500">Interactive Chart Would Go Here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultDemo({ type }: { type: string }) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🚀</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {type.charAt(0).toUpperCase() + type.slice(1)} Demo
      </h3>
      <p className="text-gray-600">
        This is a placeholder for the {type} demo component.
      </p>
    </div>
  );
}
