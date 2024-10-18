import Image from 'next/image'
import React from 'react'
import logoImage from "../_assets/Screenshot 2024-09-26 083619.png";
import logo from "../_assets/Screenshot 2024-09-26 083944.png";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from 'next/link';

export default function ForgotPassword() {
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
      <div className='w-[60%] max-lg:w-full h-full max-lg:h-[600px] flex gap-6 justify-center flex-col bg-white pl-12 relative'>
        <div className='flex gap-3 items-center absolute left-8 top-8'>
            <IoArrowBackSharp color={"black"} size={20}/>
            <p className='font-semibold'>
                <Link href={"/login"}>
                    Back
                </Link>
            </p>
        </div>
        <div className='flex flex-col gap-3 w-[60%] max-lg:w-full'>
            <h2 className='text-3xl font-semibold'>Forgot Password</h2>
            <p className='font-light text-sm'>Enter the email address you used to create the account, and we will email you insructions to reset your password.</p>
            <label htmlFor="">Email Address <span className='text-red-500'>*</span></label>
            <input placeholder='Enter your Email' type='text' className='p-3 border rounded-md text-sm'/>
            <button className='bg-[#1C2FA3] text-white p-3 rounded-md font-medium tracking-widest mt-10'> 
                <Link href={"/otpconfirmation"}>
                    Request OTP
                </Link>
            </button>
        </div>
      </div>        
    </div>
  )
}
