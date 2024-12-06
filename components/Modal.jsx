'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-8 sm:p-10 md:p-12'
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/5 2xl:w-2/3 p-8 sm:p-10 md:p-12'
      >
        {children}
      </div>
    </div>
  );
}
