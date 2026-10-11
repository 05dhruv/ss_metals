'use client';

import { useState } from 'react';

/**
 * Global switch for product images:
 * - When false: Always displays the clean tumbler outline placeholder (iss time bss blank aaye).
 * - When true: Automatically renders product image when uploaded/available (baad me add kar sake).
 */
export const ENABLE_PRODUCT_IMAGES = false;

interface ProductImagePlaceholderProps {
  src?: string | null;
  alt: string;
  className?: string;
  height?: string | number;
}

export default function ProductImagePlaceholder({
  src,
  alt,
  className = '',
  height = '230px',
}: ProductImagePlaceholderProps) {
  const [imgError, setImgError] = useState(false);

  // If enabled globally, has valid src, and hasn't errored
  const hasValidImage = Boolean(ENABLE_PRODUCT_IMAGES && src && src.trim() !== '' && !imgError);

  return (
    <div
      className={`product-placeholder-box ${className}`}
      style={{
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        background: '#cfd8dc',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      }}
    >
      {hasValidImage ? (
        <img
          src={src as string}
          alt={alt}
          loading="lazy"
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#78909c',
          }}
        >
          {/* Tumbler / Kalvat SS vessel placeholder icon matching user screenshot */}
          <svg
            width="60"
            height="72"
            viewBox="0 0 52 64"
            fill="none"
            stroke="#78909c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.85 }}
          >
            <ellipse cx="26" cy="12" rx="16" ry="4.5" />
            <path d="M10 12 L15 54 C15 56.5 19.5 58.5 26 58.5 C32.5 58.5 37 56.5 37 54 L42 12" />
            <path d="M11 20 C14 23 38 23 41 20" opacity="0.4" />
          </svg>
        </div>
      )}
    </div>
  );
}
