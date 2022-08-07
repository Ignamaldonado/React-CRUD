import { useState, useEffect } from 'react'
import Input from './Input'
import Comments from './Comments'
import SubmitButton from './SubmitButton'
import Error from './Error'

const Form = ({ pet, pets, setPets, setPet }) => {
  const [petName, setPetName] = useState('')
  const petNameHook = (e) => setPetName(e.target.value)
  const [type, setType] = useState('')
  const typeHook = (e) => setType(e.target.value)
  const [age, setAge] = useState('')
  const ageHook = (e) => setAge(e.target.value)
  const [weight, setWeight] = useState('')
  const weightHook = (e) => setWeight(e.target.value)
  const [comment, setComment] = useState('')
  const commentHook = (e) => setComment(e.target.value)
  const [id, setId] = useState('')

  const [error, setError] = useState(false)
  const [numberError , setNumberError] = useState(false)

  useEffect(() => {
    if (Object.keys(pet).length > 0) {
      setPetName(pet.name)
      setType(pet.type)
      setId(pet.id)
      setAge(pet.age)
      setWeight(pet.weight)
      setComment(pet.comment)
    }
  }, [pet])

  const idGenerator = () => {
    const date = Date.now().toString(30)
    const number = Math.random().toString(30).substr(2)

    return date + number
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
    //validacion
    const numberRegEx = /^[+]?\d+([.]\d+)?$/

    if([ petName, type, age, weight, comment ].includes('')) {
      setError(true)
      return;
    } 

    if (numberRegEx.test(age) === false) {
      setNumberError(true)
      return;
    }

    if (numberRegEx.test(weight) === false) {
      setNumberError(true)
      return;
    }

    setError(false)
    setNumberError(false)

    const petObject = {
        name: petName,
        type,
        age,
        weight,
        comment
    }

    if(pet.id) {
      petObject.id = pet.id
      const updatedPets = pets.map(petsState => petsState.id === pet.id ? petObject : petsState)
      setPets(updatedPets)
      setPet({})
    } else{
      petObject.id = idGenerator()
      setPets([...pets, petObject])
    }

    

    setPetName('')
    setType('')
    setAge('')
    setWeight('')
    setComment('')
    setId('')


  }

  

  return (
    <>
      {id === pet.id ?
            <div className='w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Edit pet</h2>
            <p className='text-lg mt-5 text-center mb-10'>
              Keep track of your {''}
              <span className='text-blue-300 font-bold'>pet health</span>
            </p>
            <form 
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3'
            onSubmit={handleSubmit}
            >
              { error && <Error error='a ver si funca la chotada' />}
              { numberError && <Error error='La edad y peso tienen que contener solo numeros' />}
              <Input id='age' label='Pet age' placeholder='Age' value={age} Hook={ageHook} />
              <Input id='weight' label='Pet weight' placeholder='Weight' value={weight} Hook={weightHook}/>
              <Comments value={comment} Hook={commentHook} />
              <SubmitButton value={'Edit pet'}/>
            </form>
        </div> 
      :
      <div className='w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>New pets</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Add pet's and {''}
        <span className='text-blue-300 font-bold'>Follow them</span>
      </p>
      <form 
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3'
      onSubmit={handleSubmit}
      >
        { error && <Error error='a ver si funca la chotada' />}
        <Input id='name' label='Pet name' placeholder='Name' value={petName} Hook={petNameHook} />
        <Input id='type' label='Pet type' placeholder='Type' value={type} Hook={typeHook} />
        { numberError && <Error error='La edad y peso tienen que contener solo numeros' />}
        <Input id='age' label='Pet age' placeholder='Age' value={age} Hook={ageHook} />
        <Input id='weight' label='Pet weight' placeholder='Weight' value={weight} Hook={weightHook}/>
        <Comments value={comment} Hook={commentHook} />
        <SubmitButton Value={'Register pet'}/>
      </form>
      </div>
      }

    </>
  )
}

export default Form