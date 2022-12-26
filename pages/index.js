import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './components/Layout';
import data from '../utils/data';
import ProductItem from './components/ProductItem';

export default function Home() {
  return (
    <>
      <Layout title={'home'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <div key={product.slug}>
              <ProductItem product={product}></ProductItem>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
