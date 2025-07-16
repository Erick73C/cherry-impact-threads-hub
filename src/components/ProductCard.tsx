import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
}

const ProductCard = ({ 
  name, 
  price, 
  image, 
  category, 
  isNew = false, 
  isSale = false, 
  originalPrice 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-primary text-primary-foreground">
                Nuevo
              </Badge>
            )}
            {isSale && (
              <Badge variant="destructive">
                Oferta
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Action Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Consultar
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
            <h3 className="font-semibold text-foreground line-clamp-2">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;