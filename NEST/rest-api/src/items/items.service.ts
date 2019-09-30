import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123456',
      name: 'Item one',
      description: 'desc for item number one',
      qty: 60,
    },
    {
      id: '9',
      name: 'Item two',
      description: 'Number two desc',
      qty: 4,
    },
  ];

  findAll(): Item[] {
    return [...this.items];
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
