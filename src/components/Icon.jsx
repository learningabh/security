// Consistent 24px line icons drawn for the KRG site.
const icons = {
  shield: <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3zM9 12l2 2 4-4" />,
  building: (
    <path d="M4 21V4h11v17M15 9h5v12M2 21h20M8 7h3M8 11h3M8 15h3M18 13h0M18 17h0" />
  ),
  home: <path d="M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-5h4v5" />,
  warehouse: <path d="M3 21V9l9-5 9 5v12M7 21v-8h10v8M7 17h10" />,
  ticket: (
    <path d="M4 7h16v3a2 2 0 000 4v3H4v-3a2 2 0 000-4V7zM14 7v2M14 11v2M14 15v2" />
  ),
  badge: (
    <>
      <path d="M5 4h14v17H5zM9.5 4v2h5V4M8.5 17.5c.7-1.6 2-2.5 3.5-2.5s2.8.9 3.5 2.5" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 4.8a3.2 3.2 0 010 6.4M17.5 14.4c2 .8 3.5 2.9 3.5 5.6" />
    </>
  ),
  briefcase: <path d="M3 8h18v12H3zM9 8V5h6v3M3 13h18" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.4-4.4" />
    </>
  ),
  map: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />,
  chat: <path d="M4 5h16v11H9.5L4 20V5zM8 9.5h8M8 12.5h5" />,
  clipboard: <path d="M9 3.5h6v3H9zM7 5H5v16h14V5h-2M8 12h8M8 16h5" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  store: (
    <path d="M4 9l1.2-5h13.6L20 9M4 9h16M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0 2.7 2.7 0 005.3 0M5 11.5V20h14v-8.5M10 20v-5h4v5" />
  ),
  factory: <path d="M3 21V11l5 3v-3l5 3V7l8-3v17H3zM7 17h2M12 17h2M17 17h2" />,
  calendar: <path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 14h2M14 14h2" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
};

function Icon({ name, size = 24, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}

export default Icon;
