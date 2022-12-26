import React from 'react';
import Image from 'next/image';
import Layout from './Layout';
import Link from 'next/link';
import items from '../../utils/items';

export default function ProductItem({ product }) {
  const handleClick = (e) => {
    e.preventDefault();
    const obj = {
      image: product.image,
      name: product.name,
      brand: product.brand,
    };
    items.push(obj);
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items);
  };
  return (
    <div className="card">
      <div className="flex flex-col items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-mono">{product.name}</h2>
        </Link>
        <p className="mb-2 font-bold">{product.brand}</p>
        <p>Rs{product.price}</p>
        <button className="primary-button mb-2">Buy Now</button>
        <button onClick={handleClick} className="primary-button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
