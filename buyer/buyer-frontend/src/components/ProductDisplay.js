import React from 'react';
import ProductCard from './ProductCard';
import './products.css';

const products = [
    {
        name: 'Bananas',
        price: 'Rs 30',
        unit: 'dozen',
        location: 'Pune',
        image: 'banana.jpg',
    },
    {
        name: 'Cauliflower',
        price: 'Rs 40',
        unit: 'kg',
        location: 'Nashik',
        image: 'cauliflower.jpg',
    },
    {
        name: 'Cotton',
        price: 'Rs 200',
        unit: 'kg',
        location: 'Ahmedabad',
        image: 'cotton.jpg',
    },
    {
        name: 'Ginger',
        price: 'Rs 10',
        unit: 'kg',
        location: 'Nagpur',
        image: 'ginger.jpg',
    },
    {
        name: 'Mangoes',
        price: 'Rs 150',
        unit: 'kg',
        location: 'Ratnagiri',
        image: 'mango.jpg',
    },
    {
        name: 'Capsicum',
        price: 'Rs 30',
        unit: 'kg',
        location: 'Nagpur',
        image: 'caps.jpg',
    },
    {
        name: 'Papaya',
        price: 'Rs 45',
        unit: 'kg',
        location: 'Delhi',
        image: 'papaya.jpg',
    },
    {
        name: 'Pomegranate',
        price: 'Rs 40',
        unit: 'kg',
        location: 'Kerala',
        image: 'pomegranate.jpg',
    },
    {
        name: 'Sweet Potato',
        price: 'Rs 50',
        unit: 'kg',
        location: 'Bangalore',
        image: 'sweetpotato.jpg',
    },
    {
        name: 'Wheat',
        price: 'Rs 80',
        unit: 'kg',
        location: 'Jaipur',
        image: 'wheat.jpg',
    },
    // Add more products as needed
];

const ProductDisplay = () => (
    <div className="ui container">
      <div className="ui four cards">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            unit={product.unit}
            location={product.location}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );

export default ProductDisplay;
