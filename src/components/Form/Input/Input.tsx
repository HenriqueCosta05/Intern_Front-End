import { cn } from "../../../utils/cn";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    value?: string;
}

export default function Input({value, onChange, className, ...props}: InputProps) {
  return (
      <input className={cn(className, "w-11/12 py-2 rounded-md border-2 border-[rgba(150, 75, 0, 50%)")} onChange={onChange} value={value} {...props}/>
  )
}
