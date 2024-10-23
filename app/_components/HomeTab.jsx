import React, { useState } from 'react'
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Image from 'next/image';
import profileImage from "../_assets/community-3.jpg";
import Link from 'next/link';
import { HiOutlineBriefcase } from "react-icons/hi";

export default function HomeTab() {
    
  return (
    <div className='w-full h-full px-10 max-lg:px-4 py-6 bg-[#F5F6FB] overflow-y-scroll'>
          {/* Search Box With Header */}

          <div className='w-full h-[50px] items-center flex max-lg:flex-col  gap-4 max-lg:items-end'>
            <input placeholder='Search for users and job listings' className='w-[80%] max-lg:w-full h-full bg-white border p-3 ' type='text' />
            <p
              className='text-black text-sm max-lg:text-xs tracking-wider font-medium flex items-center gap-2'>August 05, 2024 12:15PM
              <IoNotifications className='cursor-pointer' color='black' size={25}/>
            </p>
            
          </div>

          {/* Overview Section */}

          <div className='flex max-lg:flex-col mt-8 justify-between'>
            <div className='flex flex-col gap-3 w-[65%] max-lg:w-full'>
              <h2 className='font-semibold text-4xl max-lg:text-3xl tracking-wide text-[#111D63]'>Overview</h2>
              
              <div className='flex justify-between w-full'>
                
                <div className='w-[23%] bg-white rounded-md p-4 gap-1 flex flex-col'>
                  <div className='w-[50px] max-lg:w-[40px] h-[50px] max-lg:h-[40px] rounded-full bg-[#FDAAA4] flex items-center justify-center'>
                    <CgProfile className='' color='white' size={30}/>
                  </div>
                  <p className='text-xs tracking-wider text-black'>Active<br/>Users</p>
                  <p className='text-lg tracking-wider font-bold'>75</p>
                </div>
                
                <div className='w-[23%] bg-white rounded-md p-4 gap-1 flex flex-col'>
                  <div className='w-[50px] max-lg:w-[40px] h-[50px] max-lg:h-[40px] rounded-full bg-[#FDAAA4] flex items-center justify-center'>
                    <CgProfile className='' color='white' size={30}/>
                  </div>
                  <p className='text-xs tracking-wider text-black'>New Job<br/>Listings</p>
                  <p className='text-lg tracking-wider font-bold'>45</p>
                </div>
                
                <div className='w-[23%] bg-white rounded-md p-4 gap-1 flex flex-col'>
                  <div className='w-[50px] max-lg:w-[40px] h-[50px] max-lg:h-[40px] rounded-full bg-[#FDAAA4] flex items-center justify-center'>
                    <CgProfile className='' color='white' size={30}/>
                  </div>
                  <p className='text-xs tracking-wider text-black'>Pending<br/>Applications</p>
                  <p className='text-lg tracking-wider font-bold'>20</p>
                </div>
                
                <div className='w-[23%] bg-[#E9E8F1] rounded-md p-4 gap-1 flex flex-col'>
                  <div className='w-[50px] max-lg:w-[40px] h-[50px] max-lg:h-[40px] rounded-full bg-[#FDAAA4] flex items-center justify-center'>
                    <CgProfile className='' color='white' size={30}/>
                  </div>
                  <p className='text-xs tracking-wider text-black w-[90%]'>Total<br/>Applications</p>
                  <p className='text-lg tracking-wider font-bold'>95</p>
                </div>
              </div>
            </div>

            {/* Todays Tasks */}

            <div className='flex flex-col gap-3 mt-4 w-[30%] max-lg:w-full p-4 bg-white rounded-md'>
              
              <div className='w-full h-fit flex justify-between '>
                <h2 className='font-medium text-sm text-[#111D63] '>Today's Tasks</h2>
                <div className='flex items-center gap-2'>
                  <p className='text-xs text-[#111D63]'>See all</p>
                  <IoIosArrowDropright color='#111D63' size={10}/>
                </div>
              </div>

              <div className='flex gap-3 items-center'>
                <FaRegCircle color='#111D63' size={15}/>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg font-semibold text-[#111D63]'>Fix Subscription Issues</h3>
                  <p className='text-sm font-light'>John Doe</p>
                </div>
              </div>
              
              <div className='flex gap-3 items-center'>
                <FaRegCircle color='#111D63' size={15}/>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg font-semibold text-[#111D63]'>Contact XYC Corp</h3>
                  <p className='text-sm font-light'>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

        {/* Job Ready Talents Section */}

          <div className='flex max-lg:flex-col justify-between w-full mt-6 h-fit'>
            
            <div className='flex flex-col gap-8 w-[65%] max-lg:w-full bg-white p-6 max-lg:p-3 rounded-xl '>
              <div className='flex w-full justify-between rounded-md'>
                <p className='text-xl font-semibold text-[#111D63]'>Job Ready Talents</p>
                <div className='flex items-center gap-2'>
                  <FaCirclePlus color='#111D63' size={20}/>
                  <p className='text-lg max-lg:text-base font-medium'>Add Job Talent</p>
                </div>
              </div>
              <div className='w-full h-fit'>
                <div className='flex justify-between '>
                  <h2 className='text-lg max-lg:text-base font-medium text-[#3B53DD]'>Name</h2>
                  <h2 className='text-lg max-lg:text-base font-medium text-[#3B53DD]'>Expertise</h2>
                  <p></p>                 
                </div>
                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>

                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>

                

                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>

                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>

                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>

                <div className='flex justify-between mt-4'>
                  <div className='flex gap-2 items-center'>
                    <Image src={profileImage} alt='Profile Image of User' className='w-[50px] h-[50px] rounded-full '/>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>John Doe</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-xl max-lg:text-sm font-semibold text-[#111D63]'>Product Designer</h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                      <p className='text-lg max-lg:text-xs underline p-3 text-[#111D63]'>View Profile</p>                    
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex flex-col gap-4 w-[30%] max-lg:w-full bg-white rounded-xl p-6'>
              <h2 className='text-xl font-semibold text-[#111D63]'>Recent Actvities</h2>
              <div className='w-full flex items-center gap-4 bg-[#F1F4F8] rounded-xl p-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <HiOutlineBriefcase color='white' size={20}/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold text-[#111D63]'>20 Jobs uploaded</h2>
                  <p className='text-sm text-[#000000] font-light tracking-widest'>9:45 AM August 01, 2024</p>
                </div>
              </div>

              <div className='w-full flex items-center gap-4 bg-[#F1F4F8] rounded-xl p-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <HiOutlineBriefcase color='white' size={20}/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold text-[#111D63]'>20 Jobs uploaded</h2>
                  <p className='text-sm text-[#000000] font-light tracking-widest'>9:45 AM August 01, 2024</p>
                </div>
              </div>

              <div className='w-full flex items-center gap-4 bg-[#F1F4F8] rounded-xl p-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <HiOutlineBriefcase color='white' size={20}/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold text-[#111D63]'>20 Jobs uploaded</h2>
                  <p className='text-sm text-[#000000] font-light tracking-widest'>9:45 AM August 01, 2024</p>
                </div>
              </div>

              <div className='w-full flex items-center gap-4 bg-[#F1F4F8] rounded-xl p-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <HiOutlineBriefcase color='white' size={20}/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold text-[#111D63]'>20 Jobs uploaded</h2>
                  <p className='text-sm text-[#000000] font-light tracking-widest'>9:45 AM August 01, 2024</p>
                </div>
              </div>

              <div className='w-full flex items-center gap-4 bg-[#F1F4F8] rounded-xl p-4'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <HiOutlineBriefcase color='white' size={20}/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-semibold text-[#111D63]'>20 Jobs uploaded</h2>
                  <p className='text-sm text-[#000000] font-light tracking-widest'>9:45 AM August 01, 2024</p>
                </div>
              </div>
            </div>
          </div>          
        </div>

  )
}
