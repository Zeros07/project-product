// src/App.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { fetchProducts, deleteProduct } from './features/products/productSlice';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import { Product } from './types';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const [editingProduct, setEditingProduct] = React.useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleCloseForm = () => {
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleAddOrUpdate = (product: Product) => {
    setEditingProduct(null);
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar
          existingProduct={editingProduct}
          onClose={handleCloseForm}
          onAddOrUpdate={handleAddOrUpdate}
        />
        <ProductList 
          products={products} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct} 
        />
      </div>
    </div>
  );
};

export default App;
