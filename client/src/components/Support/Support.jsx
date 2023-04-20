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
        <h1 className='text-5xl font-serif' style={{textAlign: 'center', marginTop: '80px'}}>You can donate through</h1>

        <div className='row' style={{textAlign:'center', padding: '60px'}}>

          <div className='col-4'>
            <a href='https://gofund.me/bc18e7b5'>
              <img src='https://p.kindpng.com/picc/s/151-1514121_go-fund-me-hd-png-download.png' alt='gofundme logo' id='gofundme-logo'/>
            </a>
          </div>

          <div className='col-2'>
            <p id='or-text' className='text-3xl font-serif'>or</p>
          </div>

          <div className='col-6'>
            <a href='https://www.mchanga.africa/fundraiser/44234'>
              <img src={'https://tadamon.community/uploads/images/mchanga_logo_1574fa55-a36a-4b2e-b4b5-c317c5b1cff6.png?v=63819070917'} alt='mchanga' id='mchanga-logo'/>
            </a>
          </div>

        </div>
        

    </div>
  )
}
