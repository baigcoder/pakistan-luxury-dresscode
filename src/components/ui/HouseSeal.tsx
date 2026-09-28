import React from "react";

interface HouseSealProps {
  size?: number;
  className?: string;
}

/** A quiet geometric thread mark used as the house's editorial signature. */
export const HouseSeal: React.FC<HouseSealProps> = ({ size = 20, className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path d="M20 3.5 24.8 15.2 36.5 20l-11.7 4.8L20 36.5l-4.8-11.7L3.5 20l11.7-4.8L20 3.5Z" stroke="currentColor" strokeWidth=".85" />
    <path d="M20 10.5 23.2 16.8 29.5 20l-6.3 3.2L20 29.5l-3.2-6.3L10.5 20l6.3-3.2 3.2-6.3Z" stroke="currentColor" strokeWidth=".75" />
    <circle cx="20" cy="20" r="1.25" fill="currentColor" />
  </svg>
);
