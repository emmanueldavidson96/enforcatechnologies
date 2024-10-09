import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { IoNewspaperOutline, IoNotifications, IoBriefcaseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiChevronsDown } from "react-icons/fi";

export default function Job() {
  return (
    <div className='w-full bg-slate-100 h-full overflow-x-auto px-4 sm:px-6'>    

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        {/* SEARCH BAR */}
        <div className='w-full sm:w-customW mb-4 sm:mb-0 bg-white flex shadow-md shadow-slate-200 px-5 items-center space-x-3'>
          <input
            className='w-full py-3 focus-within:outline-none'
            type="text"
            placeholder='Search job ready talents'
          />
          <CiSearch size={25} />
          <FiChevronsDown size={25} />
        </div>

        {/* DATE AND NOTIFICATION SESSION */}
        <div className='bg-white w-full sm:w-1/4 px-5 py-3 flex justify-between shadow-md shadow-slate-200'>
          <p>August 05, 2025 12:15 PM</p>
          <IoNotifications className='cursor-pointer' color='black' size={25} />
        </div>
      </div>

      {/* JOB AND JOB UPLOADS */}
      <div className='flex flex-col sm:flex-row justify-between mt-5 mb-5 space-y-4 sm:space-y-0'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-bold'>Jobs</h2>
        </div>
        <div className='bg-blue-800 p-3 rounded-lg flex'>
          <FiPlusCircle className='text-white h-full text-xl mr-3' />
          <h2 className='text-white'>Upload Job Application</h2>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-white p-5 h-40 rounded-xl border border-slate-300 flex flex-col justify-between'>
          <h3 className='text-2xl font-bold'>Applied</h3>
          <div className='bg-pink-100 w-fit p-2 rounded-full'>
            <IoBriefcaseSharp />
          </div>
          <p className='text-xl font-bold'>1813</p>
        </div>
        <div className='bg-white p-5 h-40 rounded-xl border border-slate-300 flex flex-col justify-between'>
          <h3 className='text-2xl font-bold'>Interviewed</h3>
          <div className='bg-slate-300 w-fit p-2 rounded-full'>
            <IoNewspaperOutline />
          </div>
          <p className='text-xl font-bold'>215</p>
        </div>
        <div className='bg-white p-5 h-40 rounded-xl border border-slate-300 flex flex-col justify-between'>
          <h3 className='text-2xl font-bold'>Rejected</h3>
          <div className='bg-green-200 w-fit p-2 rounded-full'>
            <IoNewspaperOutline />
          </div>
          <p className='text-xl font-bold'>113</p>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className='border border-slate-300 mt-5 bg-white rounded-xl p-5'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-bold'>Overview</h3>
          <div className='border rounded-full px-4 flex items-center'>
            <p className='text-sm mr-5'>Today</p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className='overflow-x-auto my-4 border'>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Talent</th>
                <th className="px-4 py-2 text-left text-sm font-medium flex items-center">Company <span className="ml-2">⇅</span></th>
                <th className="px-4 py-2 text-left text-sm font-medium">Position</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Application Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium flex items-center">Status <span className="ml-2">⇅</span></th>
                <th className="px-4 py-2 text-left text-sm font-medium">URL</th>
                <th className="px-4 py-2 text-left text-sm font-medium flex items-center">Status <span className="ml-2">⇅</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">Rovendama</td>
                <td className="px-4 py-4">Customer Manager</td>
                <td className="px-4 py-4">Sep. 15, 2024</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full flex">
                    <PiArrowBendUpLeftBold className='h-full font-extrabold' />
                    <p>APPLIED</p>
                  </span>
                </td>
                <td className="px-4 py-4">http://n</td>
                <td className="px-4 py-4">...</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">Rovendama</td>
                <td className="px-4 py-4">Sales Manager</td>
                <td className="px-4 py-4">Sep. 15, 2024</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full flex">
                    <PiArrowBendUpLeftBold className='h-full font-extrabold' />
                    <p>APPLIED</p>
                  </span>
                </td>
                <td className="px-4 py-4">http://n</td>
                <td className="px-4 py-4">...</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">Rovendama</td>
                <td className="px-4 py-4">Operation Manager</td>
                <td className="px-4 py-4">Sep. 15, 2024</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full flex">
                    <PiArrowBendUpLeftBold className='h-full font-extrabold' />
                    <p>APPLIED</p>
                  </span>
                </td>
                <td className="px-4 py-4">http://n</td>
                <td className="px-4 py-4">...</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">Rovendama</td>
                <td className="px-4 py-4">Product Manager</td>
                <td className="px-4 py-4">Sep. 15, 2024</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full flex">
                    <PiArrowBendUpLeftBold className='flex items-center mr-2' />
                    <p>APPLIED</p>
                  </span>
                </td>
                <td className="px-4 py-4">http://n</td>
                <td className="px-4 py-4">...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex">
            <FaLongArrowAltLeft className='h-full mr-2' />
            <p>Previous</p>
          </button>
          <div className="flex space-x-2">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-md">1</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">2</button>
          </div>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex">
            <p className='mr-2'>Next</p>
            <FaLongArrowAltRight className='h-full' />
          </button>
        </div>
      </div>
    </div>
  )
}

