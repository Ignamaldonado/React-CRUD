const Input = ({id, label, placeholder, value, Hook}) => {
  return (
    <div className='mb-5'>
    <label htmlFor={id} className='block text-gray-600 font-bold uppercase cursor-pointer'>{label}</label>
    <input 
      id={id}
      type='text'
      placeholder={placeholder}
      className='border-2 w-full p-1 mt-2 border-blue-300 rounded-md placeholder-gray-400'
      value={value}
      onChange={Hook}
    />
    </div>
  )
}

export default Input