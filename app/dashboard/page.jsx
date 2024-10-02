'use client';
import React, { useState } from 'react';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { CiHome } from 'react-icons/ci';
import { GiGraduateCap } from 'react-icons/gi';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { FaRegMoneyBill1 } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { SlLogout } from 'react-icons/sl';
import HomeTab from '../_components/HomeTab';
import TalentManagement from '../_components/TalentManagement';
import Job from '../_components/Job';
import Messages from '../_components/Messages';
import Calender from '../_components/Calender';
import Subscriptions from '../_components/Subscriptions';
import Settings from '../_components/Settings';


export default function Dashboard() {
  const [activeTab, set_activeTab] = useState('home');
  const [open, set_open] = useState(true);
  // const [color, setColor] = useState('white');
  const handle_open_tab = () => {
    set_open(!open);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'talentmanagement':
        return <TalentManagement />;
      case 'job':
        return <Job />;
      case 'message':
        return <Messages />;
      case 'calender':
        return <Calender />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'settings':
        return <Settings />;
      default:
        return <HomeTab />;
    }
  };
  return (
    <div className='w-full h-screen flex bg-white overflow-hidden'>
      <div
        className={`${
          open ? 'w-[20%]' : 'w-[5%]'
        } h-full flex flex-col gap-2 bg-[#4153B2] py-8 items-center justify-between`}
      >
        <div className='h-full flex flex-col gap-3 w-full items-center'>
          <div className='relative p-6 w-full'>
            <IoChevronBackCircleOutline
              color='white'
              onClick={handle_open_tab}
              size={25}
              className={`${
                open ? '' : 'rotate-180'
              } absolute right-[30px] top-1 cursor-pointer`}
            />
          </div>
          <hr className='w-full' />
          {/* Home */}
          <div
            onClick={() => set_activeTab('home')}
            className={`flex gap-4 items-center w-[80%] text-white hover:bg-white ${
              activeTab === 'home' ? 'bg-white text-[#4153B2]' : ''
            } rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <CiHome
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'home'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Home
              </p>
            )}
          </div>
          {/* Talent Management */}
          <div
            onClick={() => set_activeTab('talentmanagement')}
            className={`flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2] ${
              activeTab === 'talentmanagement' ? 'bg-white text-[#4153B2]' : ''
            }`}
          >
            <GiGraduateCap
              color={activeTab === 'talentmanagement' ? 'blue' : 'inherit'}
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'talentmanagement'
                    ? 'text-[#4153b2]'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Talent Management
              </p>
            )}
          </div>
          {/* Job */}
          <div
            onClick={() => set_activeTab('job')}
            className={`${
              activeTab === 'job' ? 'bg-white text-[#4153B2]' : ''
            } flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <PiSuitcaseSimple
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'job'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Job
              </p>
            )}
          </div>
          {/* Message */}
          <div
            onClick={() => set_activeTab('message')}
            className={`${
              activeTab === 'message' ? 'bg-white text-[#4153B2]' : ''
            } flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <MdOutlineEmail
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'message'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Message
              </p>
            )}
          </div>
          {/* Calender */}
          <div
            onClick={() => set_activeTab('calender')}
            className={`${
              activeTab === 'calender' ? 'bg-white text-[#4153B2]' : ''
            } flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <SlCalender
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'calender'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Calender
              </p>
            )}
          </div>

          {/* Subscriptions */}
          <div
            onClick={() => set_activeTab('subscriptions')}
            className={`${
              activeTab === 'subscriptions' ? 'bg-white text-[#4153B2]' : ''
            } flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <FaRegMoneyBill1
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'subscriptions'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Subscriptions
              </p>
            )}
          </div>
          {/* Settings */}
          <div
            onClick={() => set_activeTab('settings')}
            className={`${
              activeTab === 'settings' ? 'bg-white text-[#4153B2]' : ''
            } flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]`}
          >
            <IoSettingsOutline
              color='inherit'
              size={25}
              className='hover:text-[#4153B2]'
            />
            {open && (
              <p
                className={`${
                  activeTab === 'settings'
                    ? 'text-blue-500'
                    : 'text-inherit'
                } text-sm font-medium tracking-wider`}
              >
                Settings
              </p>
            )}
          </div>
        </div>

        {/* Logout */}
        <div className='flex gap-4 items-center w-[80%] text-white hover:bg-white rounded-lg p-3 cursor-pointer hover:text-[#4153B2]'>
          <SlLogout
            color='inherit'
            size={25}
            className='hover:text-[#4153B2]'
          />
          {open && (
            <p
              className={`${
                activeTab === 'logout'
                  ? 'text-blue-500'
                  : 'text-inherit'
              } text-sm font-medium tracking-wider`}
            >
              Logout
            </p>
          )}
        </div>
      </div>

      {/* Right Screen */}
      {renderContent()}
    </div>
  );
}
