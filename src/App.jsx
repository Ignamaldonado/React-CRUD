import { useState } from 'react'
import Header from './components/Header'
import Petlist from "./components/Petlist"
import Form from "./components/Form"

function App() {
  
  const [pets, setPets] = useState([])
  const [pet, setPet] = useState({})
  
  const getId = id => {
    const updatedPets = pets.filter(pet => pet.id !== id)
    setPets(updatedPets)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="flex mt-12">
        <Form setPets={setPets} setPet={setPet} pets={pets} pet={pet} />
        <Petlist pets={pets} setPet={setPet} getId={getId} />
      </div>
    </div>
  )
}

export default App
