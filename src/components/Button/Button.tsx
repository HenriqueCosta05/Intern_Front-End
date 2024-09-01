import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'reset' | 'button';
    }
export default function Button({className, variant, ...props}: ButtonProps) {
    return (
        <button {...props} className={cn(buttonVariants({ variant }), className)} type={props.type} />
  )
}

const buttonVariants = cva("py-4 px-12 font-semibold rounded-md transition-colors duration-200 text-white cursor-pointer border-2 border-white", {
    variants: {
        variant: {
            primary: "bg-[rgba(235, 173, 124, 0.75)] hover:bg-midOrange",
            secondary: "bg-darkOrange hover:bg-brown",
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})