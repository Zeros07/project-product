// src/types.ts

export interface Product {
    id: number;
    product_name: string;
    category: string;
    price: number;
    discount: number;
  }
  
  export interface NewProduct {
    product_name: string;
    category: string;
    price: number;
    discount: number;
  }
  