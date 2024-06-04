import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the server's API
    axios.get('http://localhost:8000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'Available' : 'Out of stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsPage;
