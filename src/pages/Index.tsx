import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Премиум холодильник Side-by-Side с французской дверью',
      price: 289990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/e1bd653b-ae7c-49a5-bad2-52aa009e235e.jpg',
      isNew: true
    },
    {
      id: 2,
      name: 'Встраиваемая кофемашина с автоматическим капучинатором',
      price: 156990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/53f4091f-008c-41b2-87d1-66b0f61f7570.jpg',
      isNew: true
    },
    {
      id: 3,
      name: 'Индукционная варочная панель с сенсорным управлением',
      price: 124990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/50db461b-440f-4525-b506-7bb7f9615859.jpg',
      isNew: true
    },
    {
      id: 4,
      name: 'Духовой шкаф с пиролитической очисткой',
      price: 198990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/50db461b-440f-4525-b506-7bb7f9615859.jpg',
      isNew: false
    },
    {
      id: 5,
      name: 'Посудомоечная машина премиум-класса',
      price: 142990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/e1bd653b-ae7c-49a5-bad2-52aa009e235e.jpg',
      isNew: false
    },
    {
      id: 6,
      name: 'Стиральная машина с сушкой и паровой обработкой',
      price: 167990,
      image: 'https://cdn.poehali.dev/projects/fb2f8127-6da1-4194-8936-6a9aa28510fe/files/53f4091f-008c-41b2-87d1-66b0f61f7570.jpg',
      isNew: false
    }
  ];

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      }]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Header />
        <div className="absolute top-5 right-4 z-50">
          <Cart
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
      
      <Hero />
      
      <ProductFilters />
      
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 font-['Montserrat']">Новинки</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
