import { Button } from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundImage ? undefined : '#1a1a1a'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {subtitle}
        </p>
        <Button size="lg" variant="primary">
          Learn More
        </Button>
      </div>
    </section>
  );
}
