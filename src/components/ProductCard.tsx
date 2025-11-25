import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  onAddToCart: (id: number) => void;
}

export const ProductCard = ({ id, name, price, image, isNew, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative overflow-hidden bg-gray-100">
        {isNew && (
          <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground">
            Новинка
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 font-['Montserrat'] line-clamp-2">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">
            {price.toLocaleString()} ₽
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group"
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
