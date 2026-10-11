'use client';
import { useState } from 'react';

/** Shows the image if it exists, otherwise a clean steel-coloured placeholder. */
export default function SmartImage({
  src,
  alt,
  className = '',
}: {
  src?: string | null;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-steel-100 via-steel-200 to-steel-300 ${className}`}
      >
        <svg viewBox="0 0 64 64" className="h-1/3 max-h-16 w-1/3 max-w-16 text-steel-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
          <path d="M14 14h36l-4 36a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4L14 14Z" />
          <path d="M14 22h36" />
        </svg>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
