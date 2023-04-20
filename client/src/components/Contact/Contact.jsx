import React from 'react'
import './contact.css'
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
  return (
		<Container className='pb-12'>
			<Row className='mb-5 mt-3'>
				<Col lg='8'>
					<h1 className='display-4 mb-4'>Contact Us</h1>
				</Col>
			</Row>
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
					<form className='contact_form w-100'>
						<Row>
							<Col lg='6' className='form-group'>
								<input
									className='form-control'
									id='name'
									name='name'
									placeholder='Name'
									type='text'
								/>
							</Col>
							<Col lg='6' className='form-group'>
								<input
									className='form-control'
									id='email'
									name='email'
									placeholder='Email'
									type='email'
								/>
							</Col>
						</Row>
                        <textarea className='form-control' id='message' name='message' placeholder='Message' rows='5'></textarea>
                        <br/>
                        <Row>
                            <Col lg='12' className='form-group'>
                                <button className='btn sc_btn' type='submit'> Send </button>
                            </Col>
                        </Row>
					</form>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact