import { cn } from "../../../utils/cn";

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: string;
}

export default function Description({children, className, ...props}: DescriptionProps) {
  return (
    <p className={cn(className, "text-white font-light")}>
            {children}
    </p>
  )
}
