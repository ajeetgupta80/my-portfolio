import React from 'react'
import { useState , useEffect } from "react";
import { Container,Navbar,Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


 export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled , seScrolled] = useState(false);

  useEffect (()=>{
    const onScroll =() =>{
       if( window.scollY >50)
       {
        seScrolled(true);
       } else{
        seScrolled(false);
       }
    }
   window.addEventListener("scroll", onScroll);
   return () =>   window.removeEventListener("scroll", onScroll);

    },[])

    const onUpdateActiveLink = (value) =>
    {
      setActiveLink(value);
    }

  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled ": ""}>
    <Container>
      <Navbar.Brand href="#home">
         <img src={logo} alt="Logo"/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* which link is active we gonna highlight it in top using active link  */}
          <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#Skills"className={activeLink === "Skills" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('Skills')}>Skills</Nav.Link>
          <Nav.Link href="#Projects"className={activeLink === "Projects" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('Projects')}>Projects</Nav.Link>  
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="" /></a>
            <a href="#"><img src={navIcon2} alt="" /></a>
            <a href="#"><img src={navIcon3} alt="" /></a>
          </div>
          <button className="vvd" onClick={ ()=> console.log('connect')}></button><span>Lets connect </span>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


export default NavBar
