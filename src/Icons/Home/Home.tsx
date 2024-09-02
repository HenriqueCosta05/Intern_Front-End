
export default function Home({className}: {className?: string}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M55 30.5098V34.3125C55 44.0645 55 48.9407 52.071 51.9702C49.1422 55 44.428 55 35 55H25C15.5719 55 10.8579 55 7.92893 51.9702C5 48.9407 5 44.0645 5 34.3125V30.5098C5 24.7887 5 21.9282 6.298 19.5569C7.596 17.1855 9.96737 15.7138 14.7101 12.7703L19.7101 9.66717C24.7235 6.55572 27.2302 5 30 5C32.7698 5 35.2765 6.55572 40.29 9.66717L45.29 12.7703C50.0327 15.7138 52.404 17.1855 53.702 19.5569"
        stroke="#F5F5F5"
        stroke-width="3.75"
        stroke-linecap="round"
      />
      <path
        d="M37.5 45H22.5"
        stroke="#F5F5F5"
        stroke-width="3.75"
        stroke-linecap="round"
      />
    </svg>
  );
}
