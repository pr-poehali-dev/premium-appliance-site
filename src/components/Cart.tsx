import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const Cart = ({ items, onRemove, onUpdateQuantity }: CartProps) => {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (customerName && customerPhone && agreedToTerms) {
      alert(`Заказ оформлен!\nИмя: ${customerName}\nТелефон: ${customerPhone}\nСумма: ${total.toLocaleString()} ₽`);
      setIsOrderDialogOpen(false);
      setCustomerName('');
      setCustomerPhone('');
      setAgreedToTerms(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icon name="ShoppingCart" size={20} />
          {items.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-['Montserrat']">Корзина</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Корзина пуста</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-lg font-bold text-primary mt-1">
                      {item.price.toLocaleString()} ₽
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive"
                        onClick={() => onRemove(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 space-y-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>

                <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Оформить заказ
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-['Montserrat']">
                        Оформление заказа
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          placeholder="Введите ваше имя"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Номер телефона *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                      </div>

                      <div className="flex items-start space-x-2 pt-4">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-muted-foreground leading-tight cursor-pointer"
                        >
                          Я соглашаюсь на обработку персональных данных в соответствии с политикой конфиденциальности
                        </label>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between mb-4">
                          <span className="font-semibold">Сумма заказа:</span>
                          <span className="text-xl font-bold text-primary">
                            {total.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                          onClick={handleCheckout}
                          disabled={!customerName || !customerPhone || !agreedToTerms}
                        >
                          Подтвердить заказ
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
