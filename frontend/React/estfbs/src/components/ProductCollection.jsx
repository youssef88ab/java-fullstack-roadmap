// src/components/ProductCollection.jsx
import React from 'react';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import './ProductCollection.css';

const ProductCollection = () => {
  const products = [
    {
      id: 1,
      name: "Dell Latitude 3420 14″ FHD i3",
      category: "Pc Portables Multimedia",
      price: "4000 MAD",
      image: "dell.png",
    },
    {
      id: 2,
      name: "ASUS ROG STRIX SCAR G834JYR",
      category: "Pc Portables Multimedia",
      price: "52 000,00 MAD",
      image: "https://maxgaming.ma/wp-content/uploads/2024/09/ASUS-ROG-STRIX-SCAR-18-G834JYR-R6037W-maxgaming-maroc.png",
    },
    // Add all other products here...
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <FilterSection />
          
          <div className="lg:col-span-3">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;