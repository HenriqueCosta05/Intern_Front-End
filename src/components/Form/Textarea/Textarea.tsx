import { cn } from "../../../utils/cn";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  children?: React.ReactNode;
}

export default function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        className,
        "w-11/12 py-2 rounded-md border-2 border-[rgba(150, 75, 0, 50%)"
      )}
      {...props}
    />
  );
}
