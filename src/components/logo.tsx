import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>ServiceNow Prep Logo</title>
      <path d="M8 3H4v18h4" />
      <path d="M12 3v18" />
      <path d="M20 3h-4v18h4" />
      <path d="M4 12h16" />
    </svg>
  );
}
