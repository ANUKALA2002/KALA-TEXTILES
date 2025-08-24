import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer-component/footer-component';
import { HeaderComponent } from '../header-component/header-component';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  colors: number;
  imageUrl: string;
  isOnSale?: boolean;
}




@Component({
  selector: 'app-catalog-component',
  imports: [CommonModule,FormsModule,FooterComponent,HeaderComponent],
  templateUrl: './catalog-component.html',
  styleUrl: './catalog-component.scss'
})

export class CatalogComponent {

  products: Product[] = [
    { id: 1, name: 'Autumn Dress', price: 85, oldPrice: 124, colors: 2, imageUrl: 'assets/images/covers/smiley-woman-holding-autumnal-leaf-with-copy-space.jpg', isOnSale: true },
    { id: 2, name: 'Casual Shirt', price: 29, oldPrice: 35, colors: 7, imageUrl: 'assets/images/covers/portrait-handsome-confident-model-sexy-stylish-man-fashion-hipster-male-posing-near-wall-studio-isolated.jpg', isOnSale: true },
    { id: 3, name: 'Leather Coat', price: 35, colors: 7, imageUrl: 'assets/images/covers/cool-girl-black-leather-jacket-gives-seductive-poses.jpg' },
    { id: 4, name: 'VNeck Shirt', price: 230, colors: 3, imageUrl: 'assets/images/covers/portrait-handsome-young-model-man-dressed-jeans-clothes-posing-isolated.jpg' },
    { id: 5, name: 'Long Coat Outer', price: 12, colors: 7, imageUrl: 'assets/images/covers/girl-coat.jpg' },
    { id: 6, name: 'Denim Jacket', price: 32, colors: 5, imageUrl: 'assets/images/covers/elegant-young-handsome-man-studio-fashion-portrait.jpg' },
    // { id: 7, name: 'Basic Hoodie', price: 35, colors: 4, imageUrl: 'assets/basic-hoodie.jpg' },
    // { id: 8, name: 'Flanel Shirt', price: 42, colors: 8, imageUrl: 'assets/flanel-shirt.jpg' },
    // { id: 9, name: 'Turtleneck', price: 75, colors: 2, imageUrl: 'assets/turtleneck.jpg' },
  ];
   minLimit = 0;
  maxLimit = 1000;
  minValue = 200;
  maxValue = 800;


  onPriceChange() {
    if (this.minValue > this.maxValue) {
      [this.minValue, this.maxValue] = [this.maxValue, this.minValue];
    }
   
  }
}
