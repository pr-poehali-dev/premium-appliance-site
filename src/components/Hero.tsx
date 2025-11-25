export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground animate-fade-in">
          <div className="relative z-10">
            <Icon name="ShieldCheck" size={48} className="mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-3 font-['Montserrat']">
              Мы за вашу безопасность
            </h2>
            <p className="text-lg opacity-90">
              100% защита от мошенников. Проверенные продавцы и безопасные платежи.
              Ваши покупки под надежной охраной.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-accent to-accent/80 p-8 text-accent-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative z-10">
            <Icon name="Lock" size={48} className="mb-4" />
            <h2 className="text-3xl font-bold mb-3 font-['Montserrat']">
              Ваши данные в безопасности
            </h2>
            <p className="text-lg opacity-90">
              Шифрование данных банковского уровня. Мы никогда не передаем
              вашу информацию третьим лицам.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  );
};

import Icon from '@/components/ui/icon';

export default Hero;
