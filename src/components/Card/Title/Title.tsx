import { cn } from "../../../utils/cn";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export default function Title({
  children,
  className,
  ...props
}: TitleProps) {
  return <h2 className={cn(className, "text-3xl font-black text-white")}>{children}</h2>;
}
