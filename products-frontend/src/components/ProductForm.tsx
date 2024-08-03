// src/components/ProductForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { addProduct, updateProduct } from '../features/products/productSlice';
import { Product } from '../types';
import './ProductForm.css'; // Import CSS file

interface ProductFormProps {
  existingProduct?: Product | null;
  onClose: () => void;
  onAddOrUpdate?: (product: Product) => void; // Tambahkan properti ini
}

const ProductForm: React.FC<ProductFormProps> = ({ existingProduct, onClose, onAddOrUpdate }) => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    product_name: '',
    category: '',
    price: 0,
    discount: 0,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product.id) {
      dispatch(updateProduct(product) as any); // jika Anda menggunakan TypeScript
    } else {
      dispatch(addProduct(product) as any);
    }
    if (onAddOrUpdate) onAddOrUpdate(product); // panggil onAddOrUpdate jika ada
    onClose();
  };

  return (
    <div className="container"> {/* Ensure form is centered */}
      <form onSubmit={handleSubmit}>
        <h2>{product.id ? 'Edit Product' : 'Add Product'}</h2>
        <label htmlFor="product_name">Product Name</label>
        <input
          type="text"
          id="product_name"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          required
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="CLOTHING">CLOTHING</option>
          <option value="ELECTRONIC">ELECTRONIC</option>
          <option value="ACCESSORIES">ACCESSORIES</option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="discount">Discount</label>
        <input
          type="number"
          id="discount"
          name="discount"
          value={product.discount}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
