import React, {useState} from 'react'
import './contact.css'
import {send} from 'emailjs-com';

function Contact() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const contactData = {name, email, message}

	function submitMessage(e){
		e.preventDefault()
		send('service_wd1l46j', 'template_47noz1o', contactData, 'xoQ_pF4Ba_0kMMQk-')
	}

  return (
		<div id='contact-page'>
		<div id='div-content'>
			<div className='mb-5 mt-3' >
					<h1 className='text-5xl mb-5 font-serif' style={{textAlign:'center'}} id='contact-title'>Contact Us</h1>
					<h5 style={{textAlign: 'center'}} className='text-3xl' id='contact-welcome'>Got a question or proposal, or just want to say hello? Go ahead.</h5>
			</div>
					<form id='contacts-form' onSubmit={submitMessage}>
					<div className="row mb-3">

						<div className="col-6">
							<label className="form-label">Your Name</label><br></br>
							<input type="text" placeholder="Enter your name." className='form-control' required onChange={e => setName(e.target.value)} id='name'/>
						</div>

						<div className="col-6">
							<label className='form-label'>Email Address</label><br></br>
							<input type="email" placeholder="Enter your email address." className='form-control' required onChange={e => setEmail(e.target.value)} id='email'/>
						</div>

					</div>

					<div className="row mb-3">
						<label className="form-label">Your Message</label>
						<textarea type="text" rows='3' placeholder='Enter your message.' className='form-control' required onChange={e => setMessage(e.target.value)} id='message'/>
					</div>

					<div style={{textAlign: 'center'}}>
					<button type="submit" id='send-button'>Send Message  <i className="fa-regular fa-paper-plane"></i></button> 
					</div>		
				</form>
			</div>
		</div>
	);
}

export default Contact