// src/components/FilterSection.jsx
import React from 'react';

const FilterSection = () => {
  return (
    <div className="hidden space-y-4 lg:block">
      <div>
        <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700 border-gray-300">
          Sort By
        </label>
        <select id="SortBy" className="mt-1 rounded-sm border-gray-600 text-sm border-1">
          <option>Sort By</option>
          <option value="Title, DESC">Title, DESC</option>
          <option value="Title, ASC">Title, ASC</option>
          <option value="Price, DESC">Price, DESC</option>
          <option value="Price, ASC">Price, ASC</option>
        </select>
      </div>

      <div>
        <p className="block text-xs font-medium text-gray-700">Filters</p>
        <div className="mt-1 space-y-2">
          {/* Availability Filter */}
          <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Availability </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>
                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                  Reset
                </button>
              </header>
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {['In Stock (5+)', 'Pre Order (3+)', 'Out of Stock (10+)'].map((option) => (
                  <li key={option}>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                      />
                      <span className="text-sm font-medium text-gray-700">{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {/* Price Filter */}
          <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Price </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> The highest price is $600 </span>
                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                  Reset
                </button>
              </header>
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between gap-4">
                  <label className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      placeholder="From"
                      className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                    />
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      placeholder="To"
                      className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>

          {/* Colors Filter */}
          <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Colors </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>
                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                  Reset
                </button>
              </header>
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {['Red', 'Blue', 'Green', 'Orange', 'Purple', 'Teal'].map((color) => (
                  <li key={color}>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                      />
                      <span className="text-sm font-medium text-gray-700">{color}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;