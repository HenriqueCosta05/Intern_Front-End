interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}
export default function Row({ children, className, ...props }: RowProps) {
  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
}
