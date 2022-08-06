const Error = ({error}) => {
  return (
    <div className='bg-red-800 text-white text-center p-2 uppercase font-bold mb-2'>
        <p>{error}</p>
    </div>
  )
}

export default Error