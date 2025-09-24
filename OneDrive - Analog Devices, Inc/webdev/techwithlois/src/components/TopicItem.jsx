const TopicItem = ({ title, image }) => {
  return (
    <div className='bg-white shadow-xl rounded-lg p-4 w-60 h-40 m-4 flex flex-col items-center justify-center text-center'>
      <img src={image} alt={title} className='w-12 h-12 mb-2' />
      <h2 className='text-lg font-semibold'>{title}</h2>
    </div>
  )
}

export default TopicItem
