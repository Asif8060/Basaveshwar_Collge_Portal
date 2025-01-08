import React, { useRef, useState } from 'react'
import UserProfile from './UserProfile'
import { Button, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import { FaBars, FaTimes } from 'react-icons/fa'
  

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const items = [
        {
          key: "1",
          label: (
            <a href="https://www.becbgk.edu/Admissions/Admissions_UG.php">
              Under Graduate/BE
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a href="https://www.becbgk.edu/Admissions/Admissions_PG.php">
              Post Graduate/M.Tech
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a href="https://www.becbgk.edu/Admissions/Admissions_MBA.php">
              MBA
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a href="https://www.becbgk.edu/Admissions/Admissions_MCA.php">
              MCA
            </a>
          ),
        },
      ];
  return (
    <div className="text-white w-full flex justify-between items-center bg-neutral-600 px-6 font-bold">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-[60px] rounded-xl" />

      {/* Hamburger Menu */}
      <Button
        className="nav-btn md:hidden text-white absolute right-52"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <FaTimes className='absolute right-20' /> : <FaBars className='text-black' />}
      </Button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isNavOpen ? "flex" : "hidden"
        } flex-col gap-4 absolute top-0 left-0 w-full md:relative md:flex md:flex-row md:gap-10 md:p-0 md:items-center items-center justify-center`}
      >
        <Link className="hover:text-gray-500" to="https://www.becbgk.edu/Placement/Placement_Home.html">
          Placements
        </Link>

        <Dropdown menu={{ items }}>
          <span className="flex items-center gap-2 text-gray-500 cursor-pointer">
            Academics <SlArrowDown />
          </span>
        </Dropdown>

        <Link className="hover:text-gray-500" to="https://www.becbgk.edu/CSE/CSE_Home.php?id=Na0PYD">
          Departments
        </Link>

        <Link className="hover:text-gray-500" to="https://www.becbgk.edu/About_Us/About_BEC.php">
          About
        </Link>
      </nav>

      {/* User Profile */}
      <UserProfile />
    </div>
  )
}

export default Header