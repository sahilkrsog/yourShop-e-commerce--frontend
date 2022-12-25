import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title> {title ? `${title}-yourShop` : 'yourShop'} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen justify-between shadow-md">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href={'/'} className="text-lg font-bold underline">
              yourShop
            </Link>
            <Link href={'/'} className="p-2">
              Cart
            </Link>
            <Link href={'/'} className="p-2">
              Login
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
