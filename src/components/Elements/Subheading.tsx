export const Subheading = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-3'>
      <h2 className='subTitle'>{title}</h2>
      <span className='h-0.5 flex-1 bg-gray-300' />
    </div>
  )
}
