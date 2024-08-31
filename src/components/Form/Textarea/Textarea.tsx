import { cn } from "../../../utils/cn";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value: string;
}

export default function Textarea({
  value,
  onChange,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
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
