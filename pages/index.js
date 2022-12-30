import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import RegistroModal from '../components/RegistroModal'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [visibilidad, setVisibilidad] = useState(true)
  const changeState = () => {
    setVisibilidad(!visibilidad)
  }
  return (
   <div className='bg-gray-100 flex flex-col lg:flex-row   lg:space-x-10  justify-center h-screen'>
      <RegistroModal estado={visibilidad} accion={changeState} />
      <div className='my-auto mx-auto  flex flex-col justify-center '>
        <div className='flex justify-center'>
        <img className=' w-32 h-32' src='https://cdn-icons-png.flaticon.com/512/2510/2510074.png' />
        </div>
        <div className=' max-w-screen-sm'>
        <p className='ml-3 text-4xl mt-4'>
            Horus
        </p>
        <p className='ml-3 text-2xl mt-4'>
            Horus is a platform designed with the porpouse ...
        </p>
        </div>
       
    </div>
    <div className='mx-auto border border-slate-200 w-10/12 md:w-7/12 lg:w-[25%] p-2 bg-white my-auto flex flex-row  rounded-lg shadow-xl'>
            <div className='w-full '>

              <input className='focus:outline-none focus:border-blue-500 focus:border rounded-lg focus:shadow-sm focus:shadow-blue-500/50  w-11/12 placeholder:min-w-full m-2 p-2' placeholder='Username' />
              <br></br>
              <input className='focus:outline-none focus:border-blue-500 focus:border rounded-lg focus:shadow-sm focus:shadow-blue-500/50   w-11/12 placeholder:min-w-full m-2 p-2' placeholder='Password' />
              <br></br>
              <button className=' bg-blue-500 hover:bg-blue-500/50 text-white w-11/12 rounded-md text-xl font-medium placeholder:min-w-full m-1 p-2.5'>Sign In</button>
              <p className='text-blue-600 text-center w-11/12 placeholder:min-w-full m-2 p-2'>Forgot password?</p>
              <hr className='mb-3' />
              <div className='flex flex-row'>
                <button onClick={() => setVisibilidad(!visibilidad)} className='text-white bg-green-500 hover:bg-green-500/50 w-6/12 rounded-lg font-bold placeholder:min-w-full mx-auto my-1 p-3'>Create account</button> 
              </div>
            </div>
      </div>
   </div>
  )
}
