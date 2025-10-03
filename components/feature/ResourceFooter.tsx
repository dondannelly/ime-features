interface Resource {
  title: string;
  description: string;
  type: 'document' | 'video' | 'link';
  url: string;
  icon?: string;
}

interface ResourceFooterProps {
  resources: Resource[];
}

export function ResourceFooter({ resources }: ResourceFooterProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return '📄';
      case 'video':
        return '🎥';
      case 'link':
        return '🔗';
      default:
        return '📄';
    }
  };

  return (
    <footer className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Additional Resources
          </h2>
          <p className="text-gray-400">
            Explore more about this feature
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{getIcon(resource.type)}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Inter-Mountain Features. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
