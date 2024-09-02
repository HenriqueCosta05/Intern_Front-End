import Button from "../../Button/Button";

interface ToggleProps {
  onClick: () => void;
}

export default function Toggle({ onClick }: ToggleProps) {
  return (
      <Button className="bg-orange-300 hover:bg-darkOrange rounded-none border-none flex justify-center px-0 w-full" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </Button>
  )
}
