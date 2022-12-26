import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
// import items from '../utils/items';

export default function CartItems() {
  console.log('1');
  const [data, setData] = useState([]);
  const sdata = [];

  useEffect(() => {
    console.log(2);
    const finalData = localStorage.getItem('items');
    const nData = JSON.parse(finalData);
    setData(() => {
      return nData;
    });
  }, []);

  return (
    <div>
      <Layout title={'cart'}>
        <div className="flex justify-between">
          <h1 className="font-bold">My Bag</h1>
          <p className=" font-sans">Items are reserved for 60 minutes</p>
        </div>
        {data.map((item, image) => (
          <div key={image}>
            <CartItems item={item}></CartItems>
          </div>
        ))}
      </Layout>
    </div>
  );
}
