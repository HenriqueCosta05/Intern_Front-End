import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    }
export default function Button({className, variant, ...props}: ButtonProps) {
    return (
        <button {...props} className={cn(buttonVariants({variant}), className)}/>
  )
}

const buttonVariants = cva("py-2 px-6 font-semibold rounded-md transition-colors duration-200 text-white cursor-pointer", {
    variants: {
        variant: {
            primary: "bg-lowOrange hover:bg-midOrange",
            secondary: "bg-darkOrange hover:bg-brown",
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})