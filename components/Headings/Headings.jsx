

export const HeadingLeft = ({title, subTitle}) => {
  return (
    <div className="mb-10">
      <h2 className='text-2xl md:text-5xl font-extrabold mb-3'>{title}</h2>
      <span className='mb-4 block text-lg sm:text-xl'>{subTitle}</span>
      <div className='w-24 h-2 bg-baseColor rounded-xl'></div>
    </div>
  )
}
