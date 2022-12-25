import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';

export default function Home() {
  return (
    <>
      <Layout title={'Home'}>
        <div>
          <h1 className="text-3xl font-sans">This is home page!</h1>
        </div>
      </Layout>
    </>
  );
}
