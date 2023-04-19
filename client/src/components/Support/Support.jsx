import React from 'react'
import './support.css'
import { SupportCards } from './SupportCards'
import happy from '../../assets/again.jpeg'

export const Support = () => {
  return (
    <div id='support-page'>
        <img src={'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'} alt='' id='donate-image'/>
        <h1 id='title' className='text-5xl font-bold'>Donate</h1>
        <h1 className='text-3xl font-serif' style={{textAlign: 'center', marginTop: '120px'}}>Your donation will support...</h1>
        <SupportCards/>
        <h1 className='text-3xl font-serif' style={{textAlign: 'center', marginTop: '80px'}}>You can donate through</h1>

        <div className='row' style={{textAlign:'center', padding: '60px'}}>

          <div className='col-6'>
            <a href='' type='button' className='btn btn-warning '>Go Fund Me</a>
          </div>

          <div className='col-6'>
          <a href='https://www.mchanga.africa/fundraiser/44234' type='button' className='btn btn-primary'>Mchanga</a>
          </div>

        </div>
        

    </div>
  )
}
