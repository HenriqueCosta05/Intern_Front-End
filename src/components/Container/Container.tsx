import { cn } from "../../utils/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};
export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div className={cn(className, "bg-lowOrange w-full min-h-screen h-screen flex justify-center items-center flex-col")} data-testid="container">
      {children}
    </div>
  );
}
