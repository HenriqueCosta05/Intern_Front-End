import { cn } from "../../../utils/cn";

type LabelProps = React.HTMLProps<HTMLLabelElement>

export default function Label({
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        className,
        "w-11/12 py-2"
      )}
      {...props}
      />
      
  );
}
