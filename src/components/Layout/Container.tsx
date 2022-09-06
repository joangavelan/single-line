type ContentProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContentProps) => {
  return (
    <div className='h-screen p-8'>
      <div className='mx-auto grid h-full grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-10'>
        {children}
      </div>
    </div>
  )
}
