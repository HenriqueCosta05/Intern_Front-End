interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}
export default function Body({ children, className, ...props }: BodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}
