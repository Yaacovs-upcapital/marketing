import "./navbar.css"
import { LogoWhite } from "../../assets/icons"
import { LogoBlue } from "../../assets/icons"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import useWindowSize from "../../components/windowSize";
import NavbarItems from "../NavbarItems";

import TempDrawer from "../drawer";
import React from "react";

const Navbar = (props: any) => {

  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);

  useEffect(() => {
    // clean up code
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (

    <div >
      <div >
        <NavbarItems lang={props} />
       
        {useWindowSize() <= 910 ? <TempDrawer /> : ''}
      </div>
    </div>
  )
}

export default Navbar
