import React , {useState} from 'react';
import "./navbar.css";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
const Navbar = () => {
    const [active , setActive] = useState('navBar');
    // function to toggle navbar
    const showNav = () => {
            setActive("navBar activeNavBar")
    }
    const closeNav = () => {
        setActive("navBar")
    }
  return (
  <section className='navBarSection'>
   <header className="header flex">
    <div className='logoDiv'>
     <a href='#' className='logo'>
        <h1>
            <MdOutlineTravelExplore className="icon"/>
             Travel.</h1>
     </a>
    </div>

    <div className={active}>
        <ul className="navLists flex">
            <li className="navItem">
                <a href='#' className='navLink'>Home</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>Packages</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>Shop</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>About</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>Pages</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>News</a>
            </li>

            <li className="navItem">
                <a href='#' className='navLink'>Contact</a>
            </li>
            <button className='btn'>
                <a href='#'>BOOK NOW</a>
            </button>
        </ul>
        <div className="closeNavbar">
            <AiFillCloseCircle onClick={closeNav} className='icon'/>
        </div>
    </div>
    <div className="toggleNavbar">
        <TbGridDots onClick={showNav} className="icon" />
    </div>
   </header>
  </section>
  )
}

export default Navbar
