import React, { useState } from "react";
import "../Navbar/navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { PiDotsNineLight } from 'react-icons/pi'
export default function Navbar() {
  const [active,setActive] = useState('navBar')

  const showNav = ()=>{
    setActive('navBar activeNavbar');
  }
  const hideNav = ()=>{
    setActive('navBar');
  }
  return (
    <div>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a className="logo flex">
              <h1>
                {" "}
                <SiYourtraveldottv />
                Travel
              </h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a className="navLink">Shop</a>
              </li>
              <li className="navItem">
                <a className="navLink">About</a>
              </li>
              <li className="navItem">
                <a className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a className="navLink">News</a>
              </li>
              <li className="navItem">
                <a className="navLink">Contact</a>
              </li>

              <button className="btn">Book Now</button>
            </ul>

            <div className="closeNavbar">
                <IoMdCloseCircleOutline className="icon" onClick={hideNav}/>
            </div>
          </div>

          <div className="toggleNavbar" onClick={showNav}>
            <PiDotsNineLight className='icon'/>
          </div>
        </header>
      </section>
    </div>
  );
}
