import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Елена Соколова',
      role: 'Дизайнер интерьеров',
      text: 'Купила кофемашину Miele — это настоящее произведение искусства! Качество сборки и функционал на высшем уровне.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      role: 'Владелец ресторана',
      text: 'Профессиональная техника для дома. Заказал полный комплект для кухни — доставка и установка прошли безупречно.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      role: 'Архитектор',
      text: 'Впечатлена уровнем сервиса и вниманием к деталям. Персональный менеджер помог подобрать идеальное решение.',
      rating: 5
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Montserrat']">
        Отзывы наших клиентов
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="animate-fade-in hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold font-['Montserrat']">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
