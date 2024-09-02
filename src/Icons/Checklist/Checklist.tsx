
export default function Checklist({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 39.5L17.8571 42.5L25 35"
        stroke="white"
        stroke-width="3.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 22L17.8571 25L25 17.5"
        stroke="white"
        stroke-width="3.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.5 22.5H45"
        stroke="white"
        stroke-width="3.75"
        stroke-linecap="round"
      />
      <path
        d="M32.5 40H45"
        stroke="white"
        stroke-width="3.75"
        stroke-linecap="round"
      />
      <path
        d="M55 30C55 41.785 55 47.6777 51.3387 51.3387C47.6777 55 41.785 55 30 55C18.2149 55 12.3223 55 8.66117 51.3387C5 47.6777 5 41.785 5 30C5 18.2149 5 12.3223 8.66117 8.66117C12.3223 5 18.2149 5 30 5C41.785 5 47.6777 5 51.3387 8.66117C53.7732 11.0955 54.589 14.5164 54.8623 20"
        stroke="white"
        stroke-width="3.75"
        stroke-linecap="round"
      />
    </svg>
  );
}
