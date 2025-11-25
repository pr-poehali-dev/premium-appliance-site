import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-primary text-primary-foreground">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                  Каталог
                </a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                  Новинки
                </a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                  Акции
                </a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                  Контакты
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <a href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary font-['Montserrat']">
              PREMIUM TECH
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 ml-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  <Icon name="Menu" size={20} className="mr-2" />
                  Каталог
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-primary text-primary-foreground">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                    Холодильники
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                    Плиты и духовки
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                    Стиральные машины
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                    Посудомоечные машины
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-accent transition-colors">
                    Кофемашины
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="Shield" size={16} className="text-green-600" />
              <span>Безопасность</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="Lock" size={16} className="text-green-600" />
              <span>Защита данных</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                Войти
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Вход в аккаунт</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <Button className="w-full">Войти</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Регистрация
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Регистрация</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Зарегистрироваться
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" size={20} />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
