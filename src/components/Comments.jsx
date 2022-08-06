
const Comments = ({value, Hook}) => {
  return (
    <div className='mb-5'>
    <label htmlFor='comment' className='block text-gray-600 font-bold uppercase cursor-pointer'>Comment</label>
    <textarea 
      id='comment'
      className='border-2 w-full p-1 mt-2 border-blue-300 rounded-md placeholder-gray-400'
      placeholder='comments'
      value={value}
      onChange={Hook}
    />
  </div>
  )
}

export default Comments