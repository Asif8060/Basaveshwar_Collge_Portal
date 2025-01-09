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
                
                <Link to="https://becbgk.irins.org/"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Faculty</li></Link>
                
                <Link to="https://www.becbgk.edu/Library/Library_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Library</li></Link>
                
                <Link to="https://www.becbgk.edu/Research/Research_BEC.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Research</li></Link>
                
                <Link to="https://www.becbgk.edu/Documents/EOA-Report%2022-23.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>AICTE-EoA</li></Link>
                
                <Link to="https://www.becbgk.edu/Documents/NPTEL%20Local%20Chapter_BEC-website.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-NPTEL Local Chapter</li></Link>
                
                <Link to="https://www.aicte-india.org/feedback/"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Feedback facility for Students and Faculty</li></Link>
                

            </ul>
        </div>
        <div>
            <ul className='list-disc pt-[70px]'>
                <Link to="https://www.becbgk.edu/Mindhog/Mindhog_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Mindhog-Students Club</li></Link>
                <Link to="https://www.becbgk.edu/Gymkhana/Gymkhana_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Gymkhana</li></Link>
                <Link to="https://www.becbgk.edu/NSS/NSS_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>NSS</li></Link>
                <Link to="https://www.becbgk.edu/Documents/RedCross%20Activities.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Red Cross</li></Link>
                <Link to="https://www.becbgk.edu/Alumni/Alumni_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Alumni</li></Link>
                <Link to="https://www.becbgk.edu/NIRF/NIRF.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>MoUs</li></Link>
                <Link to="https://www.becbgk.edu/TEQIP/Documents/MOU.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Useful Links</li></Link>
                <Link to="https://www.becbgk.edu/Documents/ST%20courses%20offered%20list%202023.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Spoken Tutorial-IIT Bombay</li></Link>
                <Link to="https://www.becbgk.edu/Documents/PLANNING%20&%20DEVELOPMENT%20COMMITTEE.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Planning and Development Committee</li></Link>
            </ul>
        </div>
        <div>
            <ul className='list-disc pt-[70px]'>
                <Link to="https://www.becbgk.edu/STEP/STEP_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC STEP</li></Link>
                <Link to="https://www.becbgk.edu/IIPC/IIPC_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IIPC</li></Link>
                <Link to="https://www.becbgk.edu/IIC/IIC_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IIC</li></Link>
                <Link to="https://www.becbgk.edu/IEP/bec-IEP.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-IEP</li></Link>
                <Link to="https://www.becbgk.edu/Documents/BEC_SC_ST_BCM/BEC_SC_ST_BCM_2022_23.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>BEC-SC/ST/BCM Cell</li></Link>
                <Link to="https://www.becbgk.edu/NAIN/NAIN_Home.php"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>NAIN</li></Link>
                <Link to="https://www.becbgk.edu/Documents/BEC%20STRATEGIC%20PLAN.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Institutional Strategic Plan</li></Link>
                <Link to="https://www.becbgk.edu/Documents/All%20Semester%20Syllabus%20with%20Seal.pdf"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Syllabus of all branch</li></Link>
                <Link to="https://bagalkot.nic.in/en/about-district/"><li  className='cursor-pointer hover:text-blue-500 text-[17px]'>Bagalkote</li></Link>
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