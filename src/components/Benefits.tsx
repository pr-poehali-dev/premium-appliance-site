import Icon from '@/components/ui/icon';

export const Benefits = () => {
  const benefits = [
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Только сертифицированная техника мировых брендов с гарантией до 5 лет'
    },
    {
      icon: 'Truck',
      title: 'Доставка и установка',
      description: 'Бесплатная доставка по городу и профессиональная установка специалистами'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Персональный менеджер и круглосуточная техническая поддержка'
    },
    {
      icon: 'Sparkles',
      title: 'Эксклюзивные модели',
      description: 'Уникальные дизайнерские решения, доступные только в нашем магазине'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-muted/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Montserrat']">
        Почему выбирают нас
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Icon name={benefit.icon as any} size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-['Montserrat']">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
