// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <li className="rounded-md flex border border-gray-300 rounded-lg">
      <a href="#" className="group block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
        />
        <div className="relative bg-white pt-3">
          <h3 className="m-3 font-bold group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>
          <p className="categorie m-3">{product.category}</p>
          <p className="stock-status m-3">
            <span style={{ fontSize: '20px' }}>&#9679;</span>
            En Stock
          </p>
          <p className="m-3">
            <span className="sr-only">{product.name}</span>
            <span className="tracking-wider text-gray-900">{product.price}</span>
          </p>
          <div className="flex justify-center">
            <button className="btn-ajouter m-3">Ajouter Au Panier</button>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;