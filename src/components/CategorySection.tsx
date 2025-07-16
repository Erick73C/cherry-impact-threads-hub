import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import womensImage from '@/assets/womens-category.jpg';
import mensImage from '@/assets/mens-category.jpg';
import kidsImage from '@/assets/kids-category.jpg';

const CategorySection = () => {
  const categories = [
    {
      id: 'women',
      title: 'Mujeres',
      description: 'Diseños atrevidos y femeninos',
      image: womensImage,
      href: '#women'
    },
    {
      id: 'men',
      title: 'Hombres',
      description: 'Estilo urbano y moderno',
      image: mensImage,
      href: '#men'
    },
    {
      id: 'kids',
      title: 'Niños',
      description: 'Diversión y comodidad',
      image: kidsImage,
      href: '#kids'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explora por Categoría
          </h2>
          <p className="text-lg text-muted-foreground">
            Encuentra el estilo perfecto para cada ocasión
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{category.description}</p>
                    <Button 
                      variant="secondary" 
                      className="bg-white/90 text-foreground hover:bg-white hover:scale-105 transition-all duration-200"
                    >
                      Explorar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;