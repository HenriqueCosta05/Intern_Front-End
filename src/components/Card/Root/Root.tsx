import { cn } from "../../../utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Root({ className, children, ...props }: CardProps) {
  return (
    <div
      data-testid="card"
      className={cn(
        className,
        "bg-[rgba(236, 173, 124, 0.75)] border-[0.5px] border-white rounded-lg w-11/12 md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center justify-center"
      )}
      >
          {children}
    </div>
  );
}
