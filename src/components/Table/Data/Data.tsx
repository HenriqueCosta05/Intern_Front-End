interface DataProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
    children: React.ReactNode;
}
export default function Data({children, className, ...props}: DataProps) {
  return (
    <td className={className} {...props}>{children}</td>
  )
}
