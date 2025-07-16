import { Button } from '@/components/ui/button';
import { Sparkles, Timer } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
              <Timer className="h-4 w-4" />
              Oferta por tiempo limitado
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              ¡Hasta <span className="text-primary">30% OFF</span> en Selección Especial!
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Aprovecha descuentos increíbles en nuestros diseños más exclusivos. 
              Solo por tiempo limitado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Ver Ofertas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-8 py-4 text-lg"
            >
              Consultar Disponibilidad
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm opacity-75">Diseños únicos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm opacity-75">Atención WhatsApp</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm opacity-75">Algodón premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;