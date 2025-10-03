import { Card } from '@/components/ui/Card';

interface StoryCardProps {
  story: {
    title: string;
    content: string;
    highlights?: string[];
  };
  image?: string;
}

export function StoryCard({ story, image }: StoryCardProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {story.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {story.content}
              </p>
              {story.highlights && (
                <ul className="space-y-2">
                  {story.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {image && (
              <div className="order-first md:order-last">
                <img 
                  src={image} 
                  alt={story.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
