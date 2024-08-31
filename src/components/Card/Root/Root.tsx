import { cn } from "../../../utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Root({ className, children, ...props }: CardProps) {
  return (
    <div
      data-testid="card"
      className={cn(
        className,
        "bg-[rgba(236, 173, 124, 0.75)] border-2 border-white rounded-lg w-4/5"
      )}
      >
          {children}
    </div>
  );
}
