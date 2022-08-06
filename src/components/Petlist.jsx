import {useEffect, useState} from 'react'
import PetInfo from "./PetInfo"

const Petlist = ({pets, setPet, getId}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pets && pets.length ? 
      <>
      {pets.length === 1 ?
      <>
      <h2 className='font-black text-3xl text-center'>Control your pet</h2>
      <p className='text-lg mt-5 text-center mb-10'>
          Follow your {''}
          <span className='text-blue-300 font-bold'>pet health!</span>
      </p>
      { pets.map( pet => {        
        return(<PetInfo pet={pet} key={pet.id} setPet={setPet} getId={getId} />) 
      })}
      </>
      
      :
      <>
      <h2 className='font-black text-3xl text-center'>Control your pets</h2>
      <p className='text-lg mt-5 text-center mb-10'>
          Follow your {''}
          <span className='text-blue-300 font-bold'>pet's health!</span>
      </p>
      { pets.map( pet => {
          return(  <PetInfo pet={pet} key={pet.id} setPet={setPet} getId={getId}  /> )
      })}
      </>
      }

      
      </> 
      : 
      <>
      <h2 className='font-black text-3xl text-center'>Control your pet</h2>
      <p className='text-lg mt-5 text-center mb-10'>
          What are you waiting to have a {''}
          <span className='text-blue-300 font-bold'>best friend?</span>
      </p>
      </>
      }

    </div>

  )
}

export default Petlist