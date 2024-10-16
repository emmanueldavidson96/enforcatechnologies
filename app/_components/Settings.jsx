import React, { useState } from 'react';
import Image from 'next/image';
import { IoNotifications } from 'react-icons/io5';
import search from '../_assets/Vector.png';
import dropDown from '../_assets/Vectorr.png';
import Link from 'next/link';
import profileImage from '../_assets/Ellipse 388.jpg';
import { TbEdit } from 'react-icons/tb';
import edit from '../_assets/edit.png';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='w-full h-full px-10 py-6 bg-[#F5F6FB] overflow-y-scroll'>
        <div className='w-full h-[50px] items-center flex gap-4 '>
          <div className='relative w-[80%]'>
            <input
              placeholder='Search for users and job listings'
              className='w-full h-full bg-white border p-3 pl-10' // extra padding for icons
              type='text'
            />
            {/* Search Icon */}
            <Image
              src={search}
              alt='search icon'
              className='absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer px-1'
            />
            {/* Dropdown Icon */}
            <Image
              src={dropDown}
              alt='dropdown icon'
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer border-l-2 px-1'
            />
          </div>
          <p className='text-black text-sm tracking-wider font-medium'>
            August 05, 2024 12:15PM
          </p>
          <IoNotifications className='cursor-pointer' color='black' size={25} />
        </div>
        <h1 className='text-2xl font-semibold text-[#3042AB] py-3 px-4'>
          Settings
        </h1>
        <div className='bg-white rounded-lg flex flex-col gap-5 border-2'>
          {/* toggle buttons */}
          <div className='w-full flex py-6 px-8 items-center'>
            <button
              className={`py-2 px-4  w-[25%] rounded ${
                activeTab === 'profile'
                  ? 'bg-blue-700 text-white '
                  : 'bg-[#E9ECF0] text-black'
              }`}
              onClick={() => handleTabChange('profile')}
            >
              Profile
            </button>
            <button
              className={`py-2 px-4 w-[25%] rounded ${
                activeTab === 'security'
                  ? 'bg-blue-700 text-white'
                  : 'bg-[#E9ECF0] text-black'
              }`}
              onClick={() => handleTabChange('security')}
            >
              Security
            </button>
            <button
              className={`py-2 px-4 w-[25%] rounded ${
                activeTab === 'payment'
                  ? 'bg-blue-700 text-white'
                  : 'bg-[#E9ECF0] text-black'
              }`}
              onClick={() => handleTabChange('payment')}
            >
              Payment Information
            </button>
            <button
              className={`py-2 px-4 rounded w-[25%] ${
                activeTab === 'faqs'
                  ? 'bg-blue-700 text-white'
                  : 'bg-[#E9ECF0] text-black'
              }`}
              onClick={() => handleTabChange('faqs')}
            >
              FAQs
            </button>
          </div>
          <div className='px-8 py-6'>
            {activeTab === 'profile' && (
              <div className='pt'>
                <h2 className='text-xl font-semibold'>Personal Information</h2>
                <div className='bg-[#E9ECF0] pt-4 mt-8 px-4 pb-6'>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                      <Image
                        src={profileImage}
                        alt='Profile Image of User'
                        className='w-[50px] h-[50px] rounded-full '
                      />
                      <div>
                        <h2 className='text-xl font-semibold text-[#111D63]'>
                          John Doe
                        </h2>
                        <p className='text-[#475466]'>Product Designer</p>
                      </div>
                    </div>
                    <div>
                      <button className='bg-white rounded flex items-center space-x-2 py-2 px-3'>
                        <Image src={edit} /> <span>Edit profile</span>
                      </button>
                    </div>
                  </div>
                  {/* form-control */}
                  <div className='mt-14'>
                    <form action=''>
                      <label className='text-sm'>
                        Bio
                        <input
                          className='w-full h-16 rounded-md'
                          type='text'
                          name=''
                          id=''
                        />
                      </label>
                    </form>
                    <div className='flex flex-col gap-3'>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            placeholder='default'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                      <div className='flex justify-between items-center mt-5 w-full'>
                        <form className='flex flex-col gap-1 w-[45%]' action=''>
                          <label htmlFor='' className='text-sm'>
                            First name
                          </label>
                          <input
                            className='w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                        <form className='mt-6 w-[50%]' action=''>
                          <input
                            className='px-3 w-full rounded-md'
                            type='text'
                            name=''
                            id=''
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'security' && (
              <div className='border-t-2'>
                <h2 className='text-xl font-semibold'>Security</h2>
                <div className='flex items-center justify-between w-full bg-[#E9ECF0] border-2 rounded-md p-5 mt-6'>
                  <p className='w-[30%]'>Delete Account</p>
                  <button className='bg-red-600 w-[60%] text-white h-12 rounded-md'>
                    Delete Account
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'payment' && (
              <div className='border-t-2'>
                <h2 className='text-xl font-semibold'>Payment Information</h2>
                <div className='flex flex-col gap-6 bg-[#E9ECF0] border-2 rounded-md p-5 mt-6'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='w-[30%]'>Account NUmber</p>
                    <input
                      className='px-3 w-[60%] rounded-md h-12'
                      placeholder='0234567488'
                      type='text'
                      name=''
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='w-[30%]'>Bank Name</p>
                    <input
                      className='px-3 w-[60%] rounded-md h-12'
                      placeholder='Guaranty Trust'
                      type='text'
                      name=''
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='w-[30%]'>Billing Period</p>
                    <input
                      className='px-3 w-[60%] rounded-md h-12'
                      placeholder='Monthly'
                      type='text'
                      name=''
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='w-[30%]'>State</p>
                    <input
                      className='px-3 w-[60%] rounded-md h-12'
                      placeholder='Lagos'
                      type='text'
                      name=''
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='w-[30%]'>Country</p>
                    <input
                      className='px-3 w-[60%] rounded-md h-12'
                      placeholder='Nigeria'
                      type='text'
                      name=''
                      id=''
                    />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'faqs' && (
              <div>
                <h2 className='text-xl font-semibold'>Profile Settings</h2>
                <p>Here you can update your profile information.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
