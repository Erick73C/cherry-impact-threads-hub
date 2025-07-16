import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Instagram, 
  MessageCircle, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone,
  Heart 
} from 'lucide-react';
import cherryLogo from '@/assets/cherry-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/20">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">¡No te pierdas las novedades!</h3>
            <p className="text-secondary-foreground/80">
              Sé la primera en conocer nuestros nuevos diseños y ofertas exclusivas
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                placeholder="tu@email.com"
                className="bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-primary-hover">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={cherryLogo} alt="Cherry Impact" className="h-8 w-8" />
                <span className="text-xl font-bold">Cherry Impact</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Moda única con diseños atrevidos que reflejan tu personalidad auténtica. 
                Estética Y2K, calidad premium.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Navegación</h4>
              <nav className="space-y-2">
                {['Inicio', 'Mujeres', 'Hombres', 'Niños', 'Catálogo', 'Sobre Nosotros'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Atención al Cliente</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>WhatsApp: +1 234 567 890</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@cherryimpact.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Ciudad, País</span>
                </div>
              </div>
              <div className="text-sm text-secondary-foreground/80">
                <p className="font-medium">Horarios de atención:</p>
                <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                <p>Domingo: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Información</h4>
              <nav className="space-y-2">
                {[
                  'Políticas de Cambio',
                  'Guía de Tallas',
                  'Métodos de Pago',
                  'Envíos y Entregas',
                  'Términos y Condiciones',
                  'Privacidad'
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Separator className="bg-border/20" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/60">
              <p>© 2024 Cherry Impact. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>en Mexico</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;