import { cn } from "../../../utils/cn";

type TableProps = React.HTMLAttributes<HTMLDivElement>;

export default function Root({ className, children, ...props }: TableProps) {
  return (
    <table
      data-testid="table"
      className={cn(
        className,
        "border-collapse border border-[#A35224] w-11/12 h-1/2 my-auto table-auto overflow-scroll"
      )}
      {...props}
    >
      {children}
    </table>
  );
}
