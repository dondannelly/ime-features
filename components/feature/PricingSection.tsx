import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface PricingSectionProps {
  pricing: {
    title: string;
    description: string;
    plans: Array<{
      id: string;
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      popular?: boolean;
      cta: {
        text: string;
        href: string;
      };
    }>;
    features: string[];
  };
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {pricing.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricing.plans.map((plan) => (
            <Card 
              key={plan.id} 
              variant={plan.popular ? "elevated" : "default"}
              className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  href={plan.cta.href}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.cta.text}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            All plans include:
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {pricing.features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
