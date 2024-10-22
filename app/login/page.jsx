import Image from 'next/image'
import React from 'react'
import logoImage from "../_assets/Screenshot 2024-09-26 083619.png";
import logo from "../_assets/Screenshot 2024-09-26 083944.png";
import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-full h-screen max-lg:h-fit flex max-lg:flex-col bg-white overflow-hidden">
      
      <div className='w-[40%] max-lg:w-full h-full max-lg:h-[600px] flex justify-center items-center bg-[#FAFAFA] relative overflow-hidden'>
        <Image src={logoImage} alt='Logo Image' width={250} height={100}/>
        <div className='w-[600px] h-[600px] bg-[#4153B2] rounded-full absolute left-[-380px] bottom-[-250px] opacity-80 z-50'>
        </div>
        <div className='w-[400px] h-[400px] bg-[#9CB3D7] opacity-80 absolute rounded-full right-[-150px] bottom-[-150px] z-10'>
        </div>
        <div className='w-[300px] h-[300px] bg-[#FFFFFF] opacity-40 rounded-full bottom-[-100px] right-[200px] z-30 absolute'>
        </div>
      </div>
      <div className='w-[60%] max-lg:w-full h-full max-lg:h-[600px] flex gap-6 justify-center flex-col bg-white pl-12 max-lg:p-6'>
        <Image src={logo} alt='Logo' width={80} height={80}/>
        <h1 className='font-semibold text-3xl'>Welcome!</h1>
        <form className='flex flex-col gap-2 w-[60%] max-lg:w-full'>
          <label htmlFor="email" className='text-sm font-bold tracking-wide'>Email<span className='text-red-500'>*</span></label>
          <input type='email' placeholder='Enter your email address' className='p-3 border rounded-md text-sm'/>          
          <input type='password' placeholder='Enter your password' className='p-3 border rounded-md text-sm'/>   
          <p className='text-red-500 font-semibold w-full text-right text-sm'>
            <Link href="/forgot_password">
              Forgot Password?
            </Link>
          </p>
          <button className='bg-[#1C2FA3] text-white p-3 rounded-md font-medium tracking-wider mt-10'>
            <Link href={"/dashboard"}>
              Log in
            </Link>
          </button>
        </form>
      </div>        
    </div>
  )
}
