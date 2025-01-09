import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-[25px] pb-10 flex flex-col mx-10 gap-6 md:flex-row'>
        <div className='mt-20'>
            <img className='w-[200px]' src="https://www.becbgk.edu/img/core-img/BEC%20logo_04.png" alt="College logo..." />
            <p className='mt-10'>Basaveshwar Engineering College Bagalkote-587103 Karnataka, India</p>
        </div>
        <div>
            <h2 className='text-[20px] font-bold border-b-2 border-cyan-500 mr-36 mb-4'>INFORMATION ABOUT</h2>
            <ul className='list-disc'> 
                <Link to="https://www.becbgk.edu/about_Sangha.php"><li className='cursor-pointer hover:text-blue-500 text-[17px]'>B. V. V. Sangha</li></Link>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Infrastructure</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Faculty</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Library</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Admissions</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Research</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>AICTE-EoA</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-NPTEL Local Chapter</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Feedback facility for Students and Faculty</li>
            </ul>
        </div>
        <div>
            <ul className='list-disc pt-[70px]'>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Mindhog-Students Club</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Gymkhana</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>NSS</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Red Cross</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Alumni</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Online Grievance Redressal</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>NIRF</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>MoUs</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Useful Links</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-DOCS</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Spoken Tutorial-IIT Bombay</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Planning and Development Committee</li>
            </ul>
        </div>
        <div>
            <ul className='list-disc pt-[70px]'>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC STEP</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IIPC</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IIC</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IEP</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-CED</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-SC/ST/BCM Cell</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IEEE (35261)</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>NAIN</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Institutional Strategic Plan</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Syllabus of all branch</li>
                <li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Bagalkote</li>
            </ul>
        </div>
        <div>
            <h2 className='text-[20px] font-bold border-b-2 border-cyan-500 mr-36 mb-3'>Contact</h2>
            <p className='pt-6'>Basaveshwar Engineering College</p>
            <div className='flex gap-2 items-center pt-4'>
                <FaPhoneSquareAlt />
                Phone: 7618781963
            </div>
            <div className='flex gap-2 items-center pt-3'>
                <MdEmail />
                E-mail: principal@becbgk.edu
            </div>
            <div className='flex gap-2 items-center pt-3'>
                <FaLocationDot />
                Bagalkote-587103 , Karnataka, India
            </div>
        </div>
    </div>
  )
}

export default Footer