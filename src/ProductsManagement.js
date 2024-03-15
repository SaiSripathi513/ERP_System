// components/ProductsManagement.js
import React from 'react';

const ProductsManagement = () => {
  // Mock data for products
    const products = [{ id: 1, name: 'Product 1', category: 'Category 1', price: 100, stock: 10 },
    // ... other products
    ];

    return (
    <div>
        <h1>Products Management</h1>
      {products}
      {/* Add functionality to add, edit, delete products */}
    </div>
    );
};

export default ProductsManagement;
