import React, {useEffect, useState} from 'react'
import { ProgramsCard } from './ProgramsCard'
import './programs.css'

export const Programs = () => {

  const [programs, setPrograms] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
      fetch('https://rebirth-ktaf.onrender.com/programs')
      .then(response => response.json())
      .then(programData => setPrograms(programData))
  },[])

  const searchPrograms = programs.filter((program) => program.title.toLowerCase().includes(search.toLowerCase()))

  const programsCard = searchPrograms.map((program) => {
    return (
      <ProgramsCard key={program.id.$oid} title={program.title} description={program.description} image={program.image_url} />
    )
  })

  return (
    <div id='our-programs-page'>
        <h1 className='font-serif text-5xl' style={{textAlign: 'center', marginTop:'90px'}}>Our Programs</h1>
        <input className='form-control border' placeholder='Search by Title' type='text' id='search-input' onChange={(e) => setSearch(e.target.value)}/>
        <div className='mt-4'>
          {programsCard}
        </div>
        
    </div>
  )
}
