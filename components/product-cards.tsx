'use client'

import React from 'react';
import Image from 'next/image';
import Button from './button';

const ProductCards: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Steel Reinforcing Bar',
      image: '/images/steel-reinforcing-bar.jpg',
    },
    {
      id: 2,
      title: 'Steel Fabrication',
      image: '/images/steel-fabrication.jpg',
    },
    {
      id: 3,
      title: 'Steel Mesh',
      image: '/images/steel-mesh.jpg',
    },
    {
      id: 4,
      title: 'Tools & Accessories',
      image: '/images/tools-accessories.jpg',
    },
  ];

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-light tracking-tight text-center mb-4">Our Products</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-16"></div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {products.map((product) => (
            <div key={product.id} className="relative overflow-hidden group">
              {/* Product Card */}
              <div className="relative h-96 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Product Title */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-3xl font-medium mb-6">{product.title}</h3>
                  <Button 
                    href="#" 
                    label="Learn more" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;