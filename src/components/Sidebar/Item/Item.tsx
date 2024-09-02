import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";

interface ItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
    }
export default function Item({children, className, href, ...props}: ItemProps) {
  return (
    <Link
      className={cn(
        "bg-lowOrange hover:bg-darkOrange py-3 px-6 w-full",
        className)}
      {...props}
      to={href}
    >
      {children}
    </Link>
  );
}
