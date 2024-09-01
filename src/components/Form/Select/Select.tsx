import { cn } from "../../../utils/cn";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  value: string;
}

export default function Select({
  value,
  onChange,
  className,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        className,
        "w-11/12 py-2 rounded-md border-2 border-[rgba(150, 75, 0, 50%)"
      )}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
}
