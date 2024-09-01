interface RootProps extends React.HTMLProps<HTMLFormElement> {
    children: React.ReactNode;
}
export default function Root({children, className, onSubmit, ...props}: RootProps) {
  return (
      <form className={className} onSubmit={onSubmit} data-testid="form">{children}</form>
  )
}
