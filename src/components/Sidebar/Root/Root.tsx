import { cn } from "../../../utils/cn";
import { useSidebar } from "../../../context";

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Root({className, children, ...props }: RootProps) {
  const {isOpen} = useSidebar();

  return (
    <div
      className={cn(
        className,
        isOpen ? "w-[60vw] lg:w-[20vw] bg-lowOrange h-screen min-h-screen text-white" : "w-[20vw] lg:w-[5vw] bg-lowOrange h-screen min-h-screen text-white"
      )}
      {...props}
    >
      {children}
    </div>
  );
}