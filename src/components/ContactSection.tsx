import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto por WhatsApp 📱",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¡Conecta con Cherry Impact!
          </h2>
          <p className="text-lg text-muted-foreground">
            ¿Tienes dudas sobre tallas, disponibilidad o quieres personalizar tu pedido?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas: talla, color, diseño personalizado..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">WhatsApp Directo</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  La forma más rápida de consultar disponibilidad y hacer tu pedido
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chatear por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Instagram className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <p className="text-sm text-muted-foreground">@cherryimpact</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Horarios</h4>
                  <p className="text-sm text-muted-foreground">Lun-Sáb 9AM-7PM</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Sobre Cherry Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cherry Impact nace del amor por lo estético, atrevido y auténtico. 
                  Creemos que la moda es una forma de expresión, y nuestras prendas 
                  están diseñadas para destacar. Cada pieza cuenta una historia única 
                  con diseños Y2K que capturan la esencia de la cultura pop moderna.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;