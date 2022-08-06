const SubmitButton = ({value}) => {
  return (
    <>
        <input 
            type="submit"
            className="bg-blue-300 w-full p-3 mt-1 text-white uppercase font-bold hover:bg-blue-400 cursor-pointer"
            value={value}
        />
    </>
  )
}

export default SubmitButton