import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 500000]);

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="bg-card rounded-lg border p-6 animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Filter" size={20} />
          <h3 className="text-lg font-semibold">Фильтры</h3>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Категория</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="refrigerator">Холодильники</SelectItem>
                <SelectItem value="stove">Плиты и духовки</SelectItem>
                <SelectItem value="washer">Стиральные машины</SelectItem>
                <SelectItem value="dishwasher">Посудомоечные машины</SelectItem>
                <SelectItem value="coffee">Кофемашины</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Бренд</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите бренд" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miele">Miele</SelectItem>
                <SelectItem value="bosch">Bosch</SelectItem>
                <SelectItem value="gaggenau">Gaggenau</SelectItem>
                <SelectItem value="siemens">Siemens</SelectItem>
                <SelectItem value="smeg">SMEG</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
            </label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500000}
              step={10000}
              className="mt-2"
            />
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Применить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
