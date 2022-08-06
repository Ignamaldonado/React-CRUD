import Button from "./Button"
import Swal from 'sweetalert2'


const PetInfo = ({ pet, setPet, getId }) => {
    const { name , age , weight , type, comment, id } = pet

    const handleEdit = () => {
        setPet(pet)
    }

    const handleDelete = () => {
        Swal.fire({
            title:'Are you sure you want to delete your pet?',
            text:"You can't revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#22c55e',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'yes, delete it!'
        })
            .then(result => {
                if(result.isConfirmed) {
                    getId(id)
                    Swal.fire({
                        title:'Deleted!',
                        text:'You precious pet has been deleted...',
                        icon: 'success',
                        confirmButtonColor: '#22c55e',
                        confirmButtonText: 'OK'
                    })
                }
            })
        
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
        <Button name={'Edit'} style={'py-2 px-5 bg-green-500 hover:bg-green-600 mx-10 mt-5 rounded-md text-white'} fn={handleEdit}/>
        <Button name={'Delete'} style={'py-2 px-5 bg-red-500 hover:bg-red-600 mx-10 mt-5 rounded-md text-white'} fn={handleDelete}/>
    </div>
  </div>
  )
}

export default PetInfo