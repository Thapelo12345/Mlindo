
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EquipmentCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  className?: string;
}

const EquipmentCard = ({
  title,
  description,
  image,
  price,
  className,
}: EquipmentCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
          Sound Equipment
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-purple-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
        {price && (
          <p className="mt-2 text-lg font-bold text-purple-600">{price}</p>
        )}
      </CardContent>
      <CardFooter>
     
      </CardFooter>
    </Card>
  );
};

export default EquipmentCard;
