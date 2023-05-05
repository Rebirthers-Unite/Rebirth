import React, { useEffect, useState } from 'react'
import './programs.css'
import { useParams, useNavigate } from 'react-router-dom'

export const Program = () => {

  const {id} = useParams()
  const [program, setProgram] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://rebirth-ktaf.onrender.com/programs/${id}`)
    .then(response => response.json())
    .then(programData => setProgram(programData))
  },[])

  console.log(program)

  return (
    <div id='program-page'>

        <h1 id='h1' className='text-5xl font-serif'>{program.title}</h1>

        <div className='row mt-3' style={{padding: '30px'}}>

          <div className='col-6'>
            <img src={program.image_url} alt='program.title' />
          </div>

          <div className='col-6' id='description'>
            <p className='font-sans'>{program.description}</p>

            <div style={{textAlign: 'center'}}>
              <button id='program-donate-button' onClick={() => navigate('/support')}>Donate   <i class="fa-solid fa-arrow-right"></i></button>
            </div>

          </div>

        </div>

    </div>
  )
}
