import React,{Fragment,useState,useEffect} from 'react';

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import { AiOutlineHome,AiOutlineMessage } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { AiOutlineFolderOpen,AiOutlinePushpin,AiOutlineInfoCircle } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { MdFactory,MdOutlineCollections } from "react-icons/md";


const Navigation = () => 
{

    
    const[v1,v2]=useState({
        navigationBackground:"navigation-background",
        navigationBrand : "navigation-brand",
        navigationList : "navigation-list"
    });

    var jubo = ()=>
    {
        if(window.scrollY>100)
        {
            v2({navigationBackground:"navigation-background-scroll",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
        else if(window.scrollY<100)
        {
            v2({navigationBackground:"navigation-background",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',jubo);
    });

    return (
        <Fragment>
            <Navbar className={v1.navigationBackground}  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand > <NavLink className={v1.navigationBrand} to="/" >BKIL</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/"><span className='navigation-icon'><AiOutlineHome/></span>Home</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/about"><span className='navigation-icon'><AiOutlineInfoCircle/></span>About</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/info"><span className='navigation-icon'><MdFactory/></span>Factory Info</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/collection"><span className='navigation-icon'><MdOutlineCollections/></span>Collections</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/csr"><span className='navigation-icon'><AiOutlineFolderOpen/></span>CSR</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/contact"><span className='navigation-icon'><AiOutlineMessage/></span>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Navigation;