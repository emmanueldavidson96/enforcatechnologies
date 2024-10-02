import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import profileImage from '../_assets/Ellipse 388.jpg';
import search from '../_assets/Vector.png';
import dropDown from '../_assets/Vectorr.png';
import Image from 'next/image';
import print from '../_assets/print.png';
import share from '../_assets/share.png';
import edit from '../_assets/edit.png';
import download from '../_assets/download.png';
import briefCase from '../_assets/briefcase.png';
import employee from '../_assets/employee-man-alt.png';
import { FaCirclePlus } from 'react-icons/fa6';
import { SlOptions } from 'react-icons/sl';
import apple from '../_assets/apple.png';
import google from '../_assets/google.png';
import linkedin from '../_assets/linkedin.png';
import mcdonalds from '../_assets/mcdonalds.png';
import graph from '../_assets/graph.png';
import firstRectangle from '../_assets/first Rectangle.png';
import secondRectangle from '../_assets/second Rectangle.png';
import thirdRectangle from '../_assets/third Rectangle.png';

export default function TalentManagement() {
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
        <div className='flex mt-4 justify-center gap-5'>
          <div className='flex flex-col gap-3 w-[65%]'>
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
              <div className='flex items-center gap-3'>
                <div>
                  <button className='bg-[#4153B2] text-white p-2 rounded-l-lg'>
                    Update CV
                  </button>
                </div>
                <div className='flex items-center bg-white rounded gap-2 p-3'>
                  <Image className='cursor-pointer' src={edit} alt='edit' />
                  <Image className='cursor-pointer' src={share} alt='share' />
                  <Image className='cursor-pointer' src={print} alt='print' />
                  <Image
                    className='cursor-pointer'
                    src={download}
                    alt='download'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-[23%] bg-white rounded-md p-4 gap-2 flex flex-col'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#111D63] flex flex-col items-center justify-center gap-1'>
                  <Image
                    src={employee}
                    alt='employee'
                    className=''
                    color='white'
                    size={30}
                  />
                </div>
                <p className='text-sm text-black ps-1'>
                  Jobs
                  <br />
                  applied for
                </p>
                <p className='text-xl font-extrabold text-[#111D63] pt-1 ps-1'>
                  75
                </p>
              </div>

              <div className='w-[23%] bg-white rounded-md p-4 gap-1 flex flex-col'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <Image
                    src={employee}
                    alt='employee'
                    className=''
                    color='white'
                    size={30}
                  />
                </div>
                <p className='text-sm text-black ps-1'>
                  Interviews
                  <br />
                  attented
                </p>
                <p className='text-xl font-extrabold text-[#111D63] pt-1 ps-1'>
                  45
                </p>
              </div>

              <div className='w-[23%] bg-white rounded-md p-4 gap-4 flex flex-col items-start justify-center'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <Image
                    src={employee}
                    alt='employee'
                    className='pb-3'
                    color='white'
                    size={30}
                  />
                </div>
                <p className='text-sm text-black ps-1'>Reject</p>
                <p className='text-xl font-extrabold text-[#111D63] ps-1'>20</p>
              </div>

              <div className='w-[23%] bg-[#ffffff] rounded-md p-4 gap-1 flex flex-col'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#111D63] flex items-center justify-center'>
                  <Image
                    src={briefCase}
                    alt='case'
                    className=''
                    color='white'
                    size={30}
                  />
                </div>
                <p className='text-sm text-black ps-1'>
                  Offers
                  <br />
                  made
                </p>
                <p className='text-xl font-extrabold text-[#111D63] pt-1 ps-1'>
                  95
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-8 bg-white p-6 rounded-xl '>
              <div className='flex justify-between rounded-md'>
                <p className='text-xl font-semibold text-[#111D63]'>
                  Job Ready Talents
                </p>
                <div className='flex items-center gap-2'>
                  <FaCirclePlus color='#111D63' size={20} />
                  <p className='text-lg font-medium italic'>Add Job Talent</p>
                </div>
              </div>
              <div className='w-full h-fit'>
                <div className='flex justify-between text-left'>
                  <p className='text-base font-medium text-[#b2b3b4] text-left'>
                    Company
                  </p>
                  <p className='text-base font-medium text-[#9ea6d1] text-left'>
                    Role
                  </p>
                  <p className='text-base text-[#9ea6d1] text-left'>Link</p>
                </div>

                <div className='flex justify-between items-center my-2'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={apple}
                      alt='Profile Image of User'
                      className='w-[50px] h-[50px] rounded-full '
                    />
                    <h2 className='text-xl font-semibold text-[#111D63]'>
                      Apple inc
                    </h2>
                  </div>
                  <div className=''>
                    <h2 className='text-xl font-semibold text-[#111D63] ps-2'>
                      Product Designer
                    </h2>
                  </div>
                  <div className=''>
                    <a href='https://www.apple.com/' target='_blank'>
                      <p className='text-lg underline p-3 text-[#111D63]'>
                        https://www.apple.com/
                      </p>
                    </a>
                  </div>
                </div>
                <hr />

                <div className='flex justify-between items-center my-2'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={google}
                      alt='Profile Image of User'
                      className='w-[50px] h-[50px] rounded-full '
                    />
                    <h2 className='text-xl font-semibold text-[#111D63]'>
                      Google
                    </h2>
                  </div>
                  <div className=''>
                    <h2 className='text-xl font-semibold text-[#111D63] ps-8'>
                      Graphic Designer
                    </h2>
                  </div>
                  <div className=''>
                    <a href='https://www.google.com/' target='_blank'>
                      <p className='text-lg underline p-3 text-[#111D63]'>
                        https://www.google.com/
                      </p>
                    </a>
                  </div>
                </div>

                <hr />

                <div className='flex justify-between items-center my-2'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={linkedin}
                      alt='Profile Image of User'
                      className='w-[50px] h-[50px] rounded-full '
                    />
                    <h2 className='text-xl font-semibold text-[#111D63]'>
                      Linkedin LLC
                    </h2>
                  </div>
                  <div className=''>
                    <h2 className='text-xl font-semibold text-[#111D63] pe-5'>
                      Web Developer
                    </h2>
                  </div>
                  <div className=''>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <p className='text-lg underline p-3 text-[#111D63]'>
                        https://www.linkedin.com/
                      </p>
                    </a>
                  </div>
                </div>
                <hr />
                <div className='flex justify-between items-center my-2'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={mcdonalds}
                      alt='Profile Image of User'
                      className='w-[50px] h-[50px] rounded-full '
                    />
                    <h2 className='text-xl font-semibold text-[#111D63]'>
                      McDonalds UK
                    </h2>
                  </div>
                  <div className='flex'>
                    <h2 className='text-xl font-semibold text-[#111D63]'>
                      Product Designer
                    </h2>
                  </div>
                  <div className='flex items-center justify-center'>
                    <a href='https://www.mcdonalds.com/' target='_blank'>
                      <p className='text-lg underline p-3 text-[#111D63]'>
                        https://www.mcdonalds.com/
                      </p>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 w-[35%] mt-2'>
            <div className='flex flex-col justify-center items-center bg-white rounded-xl gap-3 p-4'>
              <p className='text-[#111D63] text-lg font-semibold'>
                Job readiness index
              </p>
              <Image src={graph} alt='graph' />
              <div className='flex items-center gap-4'>
                <div>
                  <Image src={firstRectangle} />
                  <p className='text-xs'>Profile strength</p>
                </div>
                <div>
                  <Image src={secondRectangle} />
                  <p className='text-xs'>Skill match</p>
                </div>
                <div>
                  <Image src={thirdRectangle} />
                  <p className='text-xs'>Linkedin profile</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 bg-white rounded-xl p-7'>
              <h2 className='text-[#111D63] drop-shadow-lg text-xl'>
                Activity history
              </h2>
              <p className='py-2 text-base text-[#475466] font-extrabold'>
                Applied to Azda foods
              </p>
              <hr />
              <p className='py-2 text-base text-[#475466] font-extrabold'>
                Revamped curriculum vitae
              </p>
              <hr />
              <p className='py-2 text-base text-[#475466] font-extrabold'>
                Conducted Intervies prep
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 justify-center bg-white rounded-lg mt-4 p-6'>
          <h2 className='text-xl text-[#111D63] font-bold'>Job ready talents</h2>
          <div className='flex items-center justify-between bg-[#FCFCFD] py-3'>
            <p className='text-base text-[#667085]'>Talent</p>
            <p className='ps-48 text-base text-[#667085]'>Creation date</p>
            <p></p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <Image
                  src={profileImage}
                  alt='Profile Image of User'
                  className='w-[50px] h-[50px] rounded-full '
                />
                <div>
                  <h2 className='text-xl font-semibold text-[#111D63]'>
                    John Doe
                  </h2>
                  <p className='text-[#98A2B2]'>Johndoeemail@yahoo.com</p>
                </div>
              </div>
              <p className='text-[#98A2B2]'>Aug 25, 2024</p>
              <SlOptions />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <Image
                  src={profileImage}
                  alt='Profile Image of User'
                  className='w-[50px] h-[50px] rounded-full '
                />
                <div>
                  <h2 className='text-xl font-semibold text-[#111D63]'>
                    John Doe
                  </h2>
                  <p className='text-[#98A2B2]'>Johndoeemail@yahoo.com</p>
                </div>
              </div>
              <p className='text-[#98A2B2]'>Aug 25, 2024</p>
              <SlOptions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
