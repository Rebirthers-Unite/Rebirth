import React from 'react'
import './contact.css'
import {BsSend} from 'react-icons/bs'
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
  return (
		<div id='contact-page'>
		<div id='div-content'>
			<div className='mb-5 mt-3' >
					<h1 className='text-5xl mb-5' style={{textAlign:'center'}}>Contact Us</h1>
			</div>
			<Row className='sec_sp'>
				<Col lg='5' className='mb-5'>
					<strong className='color_sec py-4'>Get in touch</strong>
					<address>
						<strong> Email: rebirthofaqueen20@gmail.com </strong>
						<br />
						<br />
						<p>
							<strong> Phone: +254720339204</strong>
						</p>
					</address>
				</Col>
				<Col lg='7' className='d-flex align-items-center'>
					<form id='contacts-form'>
					<div className="row mb-3">

						<div className="col-6">
							<label className="form-label">Your Name</label><br></br>
							<input type="text" placeholder="Enter your name." className='form-control' required onChange={e => setName(e.target.value)}/>
						</div>

						<div className="col-6">
							<label className='form-label'>Email Address</label><br></br>
							<input type="email" placeholder="Enter your email address." className='form-control' required onChange={e => setEmail(e.target.value)}/>
						</div>

					</div>

					<div className="row mb-3">
						<label className="form-label">Your Message</label>
						<textarea type="text" rows='3' placeholder='Enter your message.' className='form-control' required onChange={e => setMessage(e.target.value)}/>
					</div>

					<div style={{textAlign: 'center'}}>
					<button type="submit" id='send-button'>Send Message  <i className="fa-regular fa-paper-plane"></i></button> 
					</div>		
				</form>
				</Col>
			</Row>
			</div>
		</div>
	);
}

export default Contact