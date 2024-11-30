import React, { useState } from 'react';
import { createProduct, updateProduct } from '../api';
import { useNavigate, useParams } from 'react-router-dom'; // Updated imports

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate(); // Updated hook
  const { id } = useParams(); // Updated to use useParams for route parameters

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateProduct(id, product);
      } else {
        await createProduct(product);
      }
      navigate('/products'); // Updated method
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
