import React from 'react'
import { ProgramsCard } from './ProgramsCard'
import './programs.css'

export const Programs = () => {
  return (
    <div id='our-programs-page'>
        <h1 className='font-serif text-5xl' style={{textAlign: 'center', marginTop:'90px'}}>Our Programs</h1>
        <input className='form-control border' placeholder='Search by Title' type='text' id='search-input'/>
        <div className='mt-4'>
          <ProgramsCard/>
          <ProgramsCard/>
          <ProgramsCard/>
        </div>
        
    </div>
  )
}
