

export default function Title({children}: {children: string}) {
  return (
      <h1 className="font-black lg:text-6xl md:text-4xl text-3xl text-white lg:w-3/4">{children}</h1>
  )
}
