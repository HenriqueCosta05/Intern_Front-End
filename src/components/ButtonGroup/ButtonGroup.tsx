import { cn } from "../../utils/cn";

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    }
export default function ButtonGroup({className, children, ...props}: ButtonGroupProps) {
  return (
    <div className={cn(className, "flex space-x-4")} data-testid="button-group">
        {children}
    </div>
  )
}

