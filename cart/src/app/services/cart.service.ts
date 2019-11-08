import { Item } from '../item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Item[];

  constructor() {
    this.items = [];
  }

  public addToCart(item: Item): void {
    this.items.push(item);
  }

  public getCart(): Item[] {
    return this.items;
  }
}
