'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDisclosure } from '@heroui/react';
import { usePathname } from 'next/navigation';

import { getCookie, setCookie } from 'cookies-next';

import Button from '../buttons/Button';
import GlobalModal from '../modals/Modal';

const CookieConsent = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showConsent, setShowConsent] = useState(false);
  const [path, setPath] = useState('');

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    const checkStatus = getCookie('consent');
    if (
      ['essential-only', 'accept-all', 'rejected-all'].includes(String(checkStatus)) ||
      path === '/privacyPolicy'
    ) {
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
    setPath(pathname);
  }, [path, showConsent, pathname]);

  const handleReject = () => {
    setCookie('consent', 'rejected-all');
    setShowConsent(false);
    onClose();
  };

  const handleAccept = () => {
    setCookie('consent', 'accept-all');
    setShowConsent(false);
    onClose();
  };

  const approveEssentialOnly = () => {
    setCookie('consent', 'essential-only');
    setShowConsent(false);
  };

  return (
    <>
      {showConsent && (
        <div className="flex fixed inset-0 justify-end bg-slate-700 bg-opacity-70">
          <div className="flex flex-col bg-white lg:w-1/2 rounded-3xl p-6 fixed bottom-1 right-1">
            <div className="">
              We use third-party cookie to personalize content and to analyze web traffic. By
              clicking Accept&quot; you agree we can store cookies on your device in accordance with
              our{' '}
              <Link href="/privacyPolicy">
                <span className="text-gray-500 underline cursor-pointer">Privacy Policy</span>.
              </Link>
            </div>
            <div className="flex justify-end gap-4">
              <Button label="Manage" type="secondary" onClick={handleOpen} />
              <Button label="Accept" type="primary" onClick={approveEssentialOnly} />
            </div>
          </div>
        </div>
      )}

      <GlobalModal
        isOpen={isOpen}
        onClose={onClose}
        title="Welcome to Cookie consent management"
        body={
          <>
            <p>
              We and our partners place cookies, access and use non-sensitive information from your
              device to improve our products and personalize ads and other contents throughout this
              website. You may accept all or part of these operations. To learn more about cookies,
              partners, and how we use your data, to review your options or these operations for
              each partner, visit our {''}
              <Link href="/privacyPolicy" onClick={onClose}>
                <span className="text-gray-500 underline cursor-pointer">Privacy Policy</span>.
              </Link>
            </p>
            <p>
              By giving consent to the purposes above, you also allow this website and its partners
              to operate the following data processing: Deliver and present advertising and content,
              Ensure security, prevent and detect fraud, and fix errors , Identify devices based on
              information transmitted automatically, Link different devices, Match and combine data
              from other data sources, and Save and communicate privacy choices
            </p>
          </>
        }
        btns={
          <div className="flex justify-end gap-4">
            <Button label="Reject all" type="secondary" onClick={handleReject} />
            <Button label="Accept all" type="primary" onClick={handleAccept} />
          </div>
        }
      />
    </>
  );
};

export default CookieConsent;
