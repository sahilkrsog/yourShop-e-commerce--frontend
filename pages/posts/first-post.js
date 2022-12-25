import Link from 'next/link';
import React from 'react';

export default function FirstPage() {
  return (
    <>
      <div className="text-3xl font-bold underline">Hello</div>
      <Link href={'/'}>Please click here for the home page</Link>
    </>
  );
}
