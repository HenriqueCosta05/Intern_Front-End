interface HeaderProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children: string;
}
export default function Header({ children, className, ...props }: HeaderProps) {
  return (
    <th className={className} {...props}>
      {children}
    </th>
  );
}
