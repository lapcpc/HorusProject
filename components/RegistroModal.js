import React from 'react'

function RegistroModal() {

  return (
    <div className='absolute w-screen h-screen bg-opacity-50 bg-gray-500 '>
        <div className='p-2 shadow-lg rounded-md relative top-[30%] left-[15%] sm:left-[20%] md:left-[25%] lg:left-[35%] w-2/3 sm:w-6/12 md:w-5/12 lg:w-4/12 bg-white '>
           <h1 className='text-center p-2 text-2xl font-semibold'>Registro</h1> 
           <form className='flex flex-col space-y-2'>
            <input className='w-full p-2 outline-none focus:border focus:border-sky-500  placeholder:' placeholder='Name' />
            <input className='w-full p-2 outline-none focus:border focus:border-sky-500  placeholder:' placeholder='Email'/>
            <input type="password" className='w-full p-2 outline-none focus:border focus:border-sky-500  placeholder:' placeholder='Password'/>
            <button className='bg-green-500 w-1/3 mx-auto p-2 rounded-lg font-semibold text-white'>Registrate</button>
           </form>

        </div>
    </div>
  )
}

export default RegistroModal