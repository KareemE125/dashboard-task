import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {
  const navigate = useNavigate();

  return <section id='notFound'>
    <p className='text-center'>404 Page Not Found</p>
    <button
      className='bg-white px-4 py-2 border-1 border-color rounded-lg shadow-sm hover:bg-black hover:text-white'
      onClick={() => navigate('/')}
    >
      GO TO HOME
    </button>

  </section>
}
