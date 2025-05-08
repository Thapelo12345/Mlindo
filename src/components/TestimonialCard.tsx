
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  image?: string;
  rating: number;
}

const TestimonialCard = ({
  quote,
  name,
  position,
  image,
  rating,
}: TestimonialCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          {image ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mr-4">
              <span className="text-purple-700 font-bold text-xl">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
