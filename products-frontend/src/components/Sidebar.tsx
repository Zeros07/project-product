// src/components/Sidebar.tsx
import React from 'react';
import ProductForm from './ProductForm';
import { Product } from '../types';

interface SidebarProps {
  existingProduct: Product | null; // Hanya Product | null
  onClose: () => void;
  onAddOrUpdate?: (product: Product) => void; // Gunakan opsional jika perlu
}

const Sidebar: React.FC<SidebarProps> = ({ existingProduct, onClose, onAddOrUpdate }) => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <ProductForm existingProduct={existingProduct} onClose={onClose} onAddOrUpdate={onAddOrUpdate} />
      </aside>
    </div>
  );
};

export default Sidebar;
