// src/components/ProductList.tsx
import React from 'react';
import './ProductList.css'; // Import CSS file
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.product_name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.discount}</td>
            <td>
              <button
                className="edit" /* Add class here */
                onClick={() => onEdit(product)}
              >
                Edit
              </button>
              <button
                className="delete" /* Add class here */
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
