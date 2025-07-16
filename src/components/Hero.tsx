import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-tshirt.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Explora Tu Lado Más{' '}
                <span className="text-primary">Cherry</span> 🍒
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Moda única con diseños atrevidos y detalles que enamoran. 
                Descubre prendas que reflejan tu personalidad auténtica.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Ver Catálogo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Descubre Novedades
              </Button>
            </div>

            <div className="pt-6 space-y-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  ✨ Diseños únicos Y2K
                </span>
                <span className="flex items-center gap-1">
                  🎨 Estampados exclusivos
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  👕 Algodón premium
                </span>
                <span className="flex items-center gap-1">
                  📱 Consulta por WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Cherry Impact - Camisetas con diseños únicos"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;