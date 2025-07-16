import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Mock data - en una aplicación real vendría de una API
  const featuredProducts = [
    {
      id: '1',
      name: 'Camiseta Cherry Bomb',
      price: 115,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      category: 'Mujeres',
      isNew: true
    },
    {
      id: '2', 
      name: 'Tank Top Urban Cherry',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop',
      category: 'Mujeres',
      isSale: true
    },
    {
      id: '3',
      name: 'Hoodie Black Cherry',
      price: 185,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
      category: 'Hombres'
    },
    {
      id: '4',
      name: 'Sudadera Cherry Pop',
      price: 155,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop',
      category: 'Mujeres'
    },
    {
      id: '5',
      name: 'Camiseta Retro Cherry',
      price: 105,
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=500&fit=crop',
      category: 'Hombres'
    },
    {
      id: '6',
      name: 'Vestido Cherry Dreams',
      price: 225,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      category: 'Mujeres',
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Favoritos de la Temporada
          </h2>
          <p className="text-lg text-muted-foreground">
            Los diseños más populares que nuestros clientes adoran
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <span className="text-foreground font-medium">¿No encuentras lo que buscas?</span>
            <span className="text-primary font-semibold">¡Contáctanos por WhatsApp! 📱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;