import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Program = () => {
  const { id } = useParams()
  const [program, setProgram] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://rebiirth.onrender.com/programs/${id}`)
      .then(response => response.json())
      .then(programData => setProgram(programData))
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error fetching program:', error)
      })
  }, [id])

  return (
    <div className='bg-purple-400 p-8 mt-[-96px] text-black'>
      <h1 className='text-5xl text-center mt-20 font-serif'>{program.title}</h1>
      <div className='flex flex-col md:flex-row mt-12 md:space-x-4'>
        <div className='md:w-1/2 font-serif'>
          <img src={program.image_url} alt={program.title} />
        </div>
        <div className='md:w-1/2 font-serif' id='description'>
          <p className='leading-7 mt-32'>{program.description}</p>
          <div className='text-center'>
            <button
              className='w-40 h-16 mt-8 rounded-lg text-black border-2 border-gray-400 bg-yellow-400 transform hover:text-white hover:border-purple-700 hover:bg-purple-700'
              onClick={() => navigate('/support')}
            >
              Donate
              <i className="fa-solid fa-arrow-right pl-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

