import Button from "./Button"

const PetInfo = ({ pet, setPet, setDeletePet }) => {

    const { name , age , weight , type, comment } = pet

    const getPet = () => {
        setPet(pet)
    }

    const getDeletePet = () => {
        setDeletePet(pet)
    }

  return (
    <div className='mt-5 bg-white shadow-md mx-3 p-5 rounded-xl'>
    <p className='font-bold mb-3 text-gray-600 uppercase'>Name: {''}
      <span className='font-normal normal-case'>{name}</span>
    </p>
    <p className='font-bold mb-1 text-gray-600 uppercase'>Pet type: {''}
      <span className='font-normal normal-case'>{type}</span>
    </p>
    <p className='font-bold mb-1 text-gray-600 uppercase'>Age: {''}
      <span className='font-normal normal-case'>{age}</span>
    </p>
    <p className='font-bold mb-1 text-gray-600 uppercase'>Weight: {''}
      <span className='font-normal normal-case'>{weight} kg</span>
    </p>
    <p className='font-bold mb-1 text-gray-600 uppercase'>Comment: {''}
      <span className='font-normal normal-case'>{comment}</span>
    </p>
    <div className='flex justify-between'>
        <Button name={'Edit'} style={'py-2 px-5 bg-green-500 hover:bg-green-600 mx-10 mt-5 rounded-md text-white'} fn={getPet}/>
        <button
            type="button"
            className='py-2 px-5 bg-red-500 hover:bg-red-600 mx-10 mt-5 rounded-md text-white'
            onClick={getDeletePet}
        >
            Delete
        </button>
        
    </div>
  </div>
  )
}

export default PetInfo