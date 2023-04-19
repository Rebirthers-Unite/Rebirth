import React from 'react'
import './support.css'
import { SupportCards } from './SupportCards'

export const Support = () => {
  return (
    <div id='support-page'>
        <h1 id='title'>Donate</h1>
        <h1 className='text-3xl font-serif' style={{textAlign: 'center'}}>Your donation will support...</h1>
        <SupportCards/>
    </div>
  )
}
