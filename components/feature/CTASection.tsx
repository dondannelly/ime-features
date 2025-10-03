import { Button } from '../ui/Button';

interface CTA {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

interface CTASectionProps {
  cta: CTA;
}

export function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {cta.title}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {cta.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            href={cta.primaryButton.href}
          >
            {cta.primaryButton.text}
          </Button>
          
          {cta.secondaryButton && (
            <Button 
              size="lg" 
              variant="outline"
              href={cta.secondaryButton.href}
            >
              {cta.secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
