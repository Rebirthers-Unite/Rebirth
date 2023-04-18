import React from 'react'
import { ProgramsCard } from './ProgramsCard'
import './programs.css'

export const Programs = () => {
  return (
    <div id='our-programs-page'>
        <h1 className='font-bold text-5xl' style={{textAlign: 'center'}}>Our Programs</h1>
        <div className='mt-4'>
          <ProgramsCard/>
          <ProgramsCard/>
          <ProgramsCard/>
        </div>
        
    </div>
  )
}
