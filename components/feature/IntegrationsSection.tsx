import { Card } from '../ui/Card';

interface IntegrationsSectionProps {
  integrations: Array<{
    id: string;
    name: string;
    description: string;
    logo: string;
    category: string;
    status: 'available' | 'coming-soon' | 'beta';
  }>;
}

export function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  if (!integrations || integrations.length === 0) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'beta':
        return 'Beta';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return status;
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with the tools you already use. We integrate with 100+ popular business applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.id} variant="default" className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {integration.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(integration.status)}`}>
                      {getStatusText(integration.status)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {integration.description}
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    {integration.category}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your favorite tool? We're always adding new integrations.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Request an Integration →
          </button>
        </div>
      </div>
    </section>
  );
}
