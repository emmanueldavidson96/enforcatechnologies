import Image from 'next/image'
import React from 'react'
import logoImage from "../_assets/Screenshot 2024-09-26 083619.png";
import logo from "../_assets/Screenshot 2024-09-26 083944.png";
import Link from 'next/link';

export default function ResetPassword() {
  return (
    <div className="w-full h-screen flex bg-white overflow-hidden">
      <div className='w-[40%] h-full flex justify-center items-center bg-[#FAFAFA] relative overflow-hidden'>
        <Image src={logoImage} alt='Logo Image' width={250} height={100}/>
        <div className='w-[600px] h-[600px] bg-[#4153B2] rounded-full absolute left-[-380px] bottom-[-250px] opacity-80 z-50'>
        </div>
        <div className='w-[400px] h-[400px] bg-[#9CB3D7] opacity-80 absolute rounded-full right-[-150px] bottom-[-150px] z-10'>
        </div>
        <div className='w-[300px] h-[300px] bg-[#FFFFFF] opacity-40 rounded-full bottom-[-100px] right-[200px] z-30 absolute'>
        </div>
      </div>
      <div className='w-[60%] h-full flex gap-6 justify-center flex-col bg-white pl-12'>
        <h1 className='font-semibold text-3xl'>Reset Password</h1>
        <p>Please tupe in a new password to continue</p>
        <form className='flex flex-col gap-2 w-[60%]'>
          <label htmlFor="email" className='text-sm font-bold tracking-wide'>New Password <span className='text-red-500'>*</span></label>
          <input type='email' placeholder='Enter your email address' className='p-3 border rounded-md text-sm'/>          
          <label htmlFor="email" className='text-sm font-bold tracking-wide'>Confirm Password <span className='text-red-500'>*</span></label>
          <input type='password' placeholder='Enter your password' className='p-3 border rounded-md text-sm'/> 
          <button className='bg-[#1C2FA3] text-white p-3 rounded-md font-medium tracking-wider mt-10'>Change Password</button>
        </form>
      </div>        
    </div>
  )
}
