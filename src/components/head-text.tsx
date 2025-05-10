
const HeadText: React.FC<
  {
    children: React.ReactNode
  }
> = ({children}) => {
  return (
    <div className="border-4 p-2 border-black my-16 text-center w-64">
      <h1 className="text-xl font-semibold uppercase text-black">{children}</h1>
    </div>
  )
}

export default HeadText
