import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Navbar.module.css'
import { Transition } from "@headlessui/react";
import logo from './assets/Group 1.svg'
import cart from './assets/material-symbols_shopping-cart-outline.svg'
import {Turn as Hamburger} from 'hamburger-react'
import { useAuth0 } from "@auth0/auth0-react";

export const  Navbar=(props)=> {
  const [isOpen, setOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
      <nav className="bg-[#242424] sticky">
        <div className="max-w-8xl mx-auto py-5 px-5 sm:px-6 md:pl-10">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <Link to='/' className="flex-shrink-0">
                <img
                  className="w-20 h-20"
                  src={logo}
                />
              </Link>
              {/* write condition for selected dropdown value */}
              <div className="mx-7 text-white">
               {}
              </div>
              {/* // */}
              <div className="hidden md:block absolute right-0 mr-10">
                <div className="ml-10 flex items-baseline space-x-4">
                    {!props.state && <Link to="/Auth" className=" text-white px-3 py-2 text-sm font-medium">Login</Link>}
                    {isAuthenticated && <p>
                      {user.name}
                    </p> }
                    {isAuthenticated ? (
                    <button color="#fff" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>):(
                    <button color="#fff" onClick={() => loginWithRedirect()}>Log In</button>)}
                    {props.state && 
                    <Link to="/Cart" className="text-white">
                      <div className="flex space-x-2">
                        <img src={cart}/>
                        <span>Cart</span>
                      </div>
                    </Link>}
                </div>
              </div>
            </div>
            { !props.state &&
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} color="#fff" duration={0.5} rounded />
            </div>
            }
            {
              props.state && 
              <Link to='/Cart'>
              <img src={cart} className='md:hidden block'/>
              </Link>
            }
          </div>
        </div>

        <Transition show={isOpen}    
        enter="transition-opacity ease-linear duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          {(ref) => (
            <div className="md:hidden bg-[#242424]" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
                {!props.state && <Link
                  to="/Auth"
                  className="text-white  text-white block px-3 py-2 font-medium"
                >
                  Login
                </Link>}
                {props.state && <Link to="/Cart" className="text-white">Cart</Link>}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
  );
}

export default Navbar;