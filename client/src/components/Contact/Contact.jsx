import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactData = { name, email, message };

  function submitMessage(e) {
    e.preventDefault();
    send(
      'service_zjtmrzn',
      'template_co4xdyz',
      contactData,
      'RKpfAbo9r5wmOYkFu'
    ).then(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
    });
  }

  useEffect(() => {
    if (isSubmitted) {
      toast.success('Feedback received!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isSubmitted]);

  return (
    <div className='bg-purple-400 md:mt-[-120px] sm:mt-[-140px] sm:h-[700px] md:h-[600px]'>
      <div className='md:mb-4 md:pt-32 sm:pt-40'>
        <h1 className='text-5xl mb-2 font-serif text-center'>Contact Us</h1>
        <h5 className='text-xl sm:pb-4 font-serif text-center'>
          We value your feedback. <br /> Contact us for comments, suggestions, or
          inquiries. We're here to help.
        </h5>
      </div>
      <form
        id='contacts-form'
        onSubmit={submitMessage}
        className='max-w-[600px] mx-auto px-4'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3'>
          <div>
            <label className='block mb-1 font-serif font-semibold'>Your Name</label>
            <input
              type='text'
              placeholder='Enter your name.'
              className='w-full rounded p-2 bg-white text-black font-serif'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className='block mb-1 font-serif font-semibold'>Email Address</label>
            <input
              type='email'
              placeholder='Enter your email address.'
              className='w-full p-2 bg-white text-black rounded font-serif'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label className='block mb-1 font-serif font-semibold'>Your Message</label>
          <textarea
            rows='3'
            placeholder='Enter your message.'
            className='w-full p-2 font-serif bg-white text-black rounded'
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='relative font-serif inline-block rounded w-48 h-12 border-2 border-blue-900 bg-yellow-500 hover:bg-yellow-400 hover:text-blue-900 font-semibold'
          >
            <span>Send Message</span>
            <i className='fa-regular fa-paper-plane'></i>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Contact;
