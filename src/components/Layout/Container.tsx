type ContentProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContentProps) => {
  return (
    <div className='h-screen bg-green-100 p-8'>
      <div className='mx-auto h-full bg-orange-100 max-w-[1350px] grid grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-12'>
        {children}
      </div>
    </div>
  )
}
