import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1>Contact</h1>
        <form className='form'>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Appellidos' />
          <input type='text' placeholder='Email' />
          <textarea  placeholder='Nombre' />
          <input type='submit' value='Enviar' />

        </form>        
    </div>
  )
}
