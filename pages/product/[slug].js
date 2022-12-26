import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <Layout title={product.name}>
        <div className="ml-3">
          <div className="py-2">
            <Link href={'/'}>Home</Link>
          </div>
          <div className="grid md:grid-cols-4 md:gap-3">
            <div className="md:col-span-2">
              <Image
                className="rounded shadow"
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
              />
            </div>
            <div className="">
              <div className="font-bold"> RS {product.price}</div>
              <button className="primary-button mr-3">Add to cart</button>
              <button className=" primary-button ">Buy now</button>
              <div>{product.decription}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
