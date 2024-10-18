import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { IoNewspaperOutline, IoNotifications, IoBriefcaseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { FiChevronsDown } from "react-icons/fi";

export default function Job() {
  return (
    <div className='w-full bg-slate-100 h-full overflow-x-auto px-4 sm:px-6'>

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2'>
        {/* SEARCH BAR */}
        <div className='w-9/12 flex justify-between border rounded-xl sm:w-customW sm:mb-0 bg-white shadow-md shadow-slate-200 px-5 items-center space-x-3'>
          <CiSearch size={25} />
          <input
            className='w-full py-3 focus-within:outline-none'
            type="text"
            placeholder='Search for users and job listings'
          />
        </div>

        {/* DATE AND NOTIFICATION SESSION */}
        <div className='sm:w-3/12 py-3 flex justify-between items-center'>
          <p>August 05, 2025 12:15 PM</p>
          <div className='bg-white rounded-full px-2 py-2'>
            <IoNotifications className='cursor-pointer' color='black' size={25} />
          </div>
        </div>
      </div>

      {/* JOB AND JOB UPLOADS */}
      <div className='flex flex-col sm:flex-row justify-between mt-5 mb-5 space-y-4 sm:space-y-0'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-bold'>Subscriptions</h2>
        </div>
        <div className='bg-blue-800 py-3 px-5 rounded-lg flex'>
          <FiPlusCircle className='text-white h-full text-xl mr-3' />
          <h2 className='text-white'>Add job ready talent</h2>
        </div>
      </div>


      {/* OVERVIEW */}
      <div className='border border-slate-300 mt-5 bg-white rounded-xl p-5'>
        <h3 className='text-xl font-bold'>Overview</h3>


        <div className='overflow-x-auto my-4 border'>
          <table className="min-w-full table-auto border-collapse">
            <thead className='bg-gray-100'>
              <tr>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Talent</th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Creation Date</th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Activation Date</th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Expiry Date</th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Status</th>
                <th className="px-4 py-4 text-left text-sm font-medium align-middle">Activate</th>
              </tr>
            </thead>


            <tbody>
              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-blue-400 text-black rounded-md flex items-center w-28">
                    <PiArrowBendUpLeftBold className='mr-2' />
                    <p>CREATED</p>
                  </span>
                </td>
                <td className="bg-blue-600 text-white rounded-lg p-2 flex w-fit"><button>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-blue-400 text-black rounded-md flex items-center w-28">
                    <PiArrowBendUpLeftBold className='mr-2' />
                    <p>CREATED</p>
                  </span>
                </td>
                <td className="bg-blue-600 text-white rounded-lg p-2 flex w-fit"><button>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-blue-400 text-black rounded-md flex items-center w-28">
                    <PiArrowBendUpLeftBold className='mr-2' />
                    <p>CREATED</p>
                  </span>
                </td>
                <td className=" text-white rounded-lg flex w-fit" disabled><button className='className="bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-green-200 text-green-600 rounded-md flex items-center w-28">
                    <IoMdCheckmark className='mr-2' />
                    <p>ACTIVE</p>
                  </span>
                </td>
                <td className=" text-white rounded-lg flex w-fit" disabled><button className='className="bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-green-200 text-green-600 rounded-md flex items-center w-28">
                    <IoMdCheckmark className='mr-2' />
                    <p>ACTIVE</p>
                  </span>
                </td>
                <td className="bg-blue-600 text-white rounded-lg p-2 flex w-fit"><button>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-green-200 text-green-600 rounded-md flex items-center w-28">
                    <IoMdCheckmark className='mr-2' />
                    <p>ACTIVE</p>
                  </span>
                </td>
                <td className="text-white rounded-lg flex w-fit" disabled><button className='className="bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-customPink text-customRed rounded-md flex items-center w-28">
                    <FaXmark className='mr-2' />
                    <p>EXPIRED</p>
                  </span>
                </td>
                <td className="bg-blue-600 text-white rounded-lg p-2 flex w-fit"><button>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-customPink text-customRed rounded-md flex items-center w-28">
                    <FaXmark className='mr-2' />
                    <p>EXPIRED</p>
                  </span>
                </td>
                <td className=" text-white rounded-lg flex w-fit" disabled><button className='className="bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-blue-400 text-black rounded-md flex items-center w-28">
                    <PiArrowBendUpLeftBold className='mr-2' />
                    <p>CREATED</p>
                  </span>
                </td>
                <td className=" text-white rounded-lg flex w-fit" disabled><button className='className="bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-400 disabled:cursor-not-allowed' disabled>Activate</button></td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">JD</div>
                  <div className="ml-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">johndoe@yahoo.com</p>
                  </div>
                </td>
                <td className="px-4 py-4">August 5, 2024</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">N/A</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-customPink text-customRed rounded-md flex items-center w-28">
                    <FaXmark className='mr-2' />
                    <p>EXPIRED</p>
                  </span>

                </td>
                <td className="bg-blue-600 text-white rounded-lg p-2 flex w-fit"><button>Activate</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-around mt-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex">
            <FaLongArrowAltLeft className='h-full mr-2' />
            <p>Previous</p>
          </button>
          <div className="flex space-x-2">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-md">1</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">2</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">3</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">4</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">5</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">...</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md">13</button>
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

