'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import CookieIcon from '../../../public/images/cookies-svgrepo-com.svg';
import './header.css';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="storybook-header">
        <div className="flex w-[70%]">
          <Image src={CookieIcon} alt="Cookie" width={32} height={32} />
          <h1>Cookie</h1>
        </div>
        <div className="flex w-[30%] gap-4">
          <h5 className={pathname === '/' ? 'font-medium' : ''}>
            <Link href="/">Home</Link>
          </h5>
          <h5 className={pathname === '/about' ? 'font-medium' : ''}>
            <Link href="/about">About</Link>
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
