import React from 'react'
import { ProgramsCard } from './ProgramsCard'
import './programs.css'

export const Programs = () => {
  return (
    <div id='our-programs-page'>
        <h1>Our Programs</h1>
        <ProgramsCard/>
        <ProgramsCard/>
        <ProgramsCard/>
    </div>
  )
}
