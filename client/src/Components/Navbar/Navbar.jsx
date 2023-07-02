import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.module.css";
import { Transition } from "@headlessui/react";
import logo from "./assets/Group 1.svg";
import cart from "./assets/material-symbols_shopping-cart-outline.svg";
import location from "./assets/locationico.svg";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("authToken");
    navigate("/Auth")
  }
  return (
    <nav className="bg-[#242424] sticky border-y border-t-0 border-[#FA144B]">
      <div className="max-w-[98vw] mx-auto py-5 px-5 sm:px-6 md:pl-10">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link to="/" className="">
              <img className="md:w-[9vw] w-[20vw]" src={logo} alt="logo" />
            </Link>
            {/*condition for selected dropdown value */}
            {props.selectedValue && (
              <div className="mx-7 flex space-x-2 text-white text-sm items-center">
                <img src={location} alt="location" className="w-5 h-5" />
                <p>{props.selectedValue}</p>
              </div>
            )}

            <div className="hidden md:block absolute right-0 mr-10">
              <div className="ml-10 flex space-x-4 items-center">
                {localStorage.getItem("authToken") ? (
                <button
                  className="text-white justify-between text-sm block px-3 py-2 font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/Auth"
                  className="text-white text-sm block px-3 py-2 font-medium"
                >
                  Login
                </Link>
              )}

                {localStorage.getItem("authToken")? (
                  <>
                    <Link to="/Cart" className="text-white text-sm font-medium">
                      <div className="flex space-x-2 items-center">
                        <img src={cart} alt="cart" />
                        <span>Cart</span>
                      </div>
                    </Link>
                    <Link
                      to="/myorders"
                      className="text-white text-sm font-medium"
                    >
                      <span>My Orders</span>
                    </Link>
                  </>
                ):" "
                }
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              color="#fff"
              duration={0.5}
              rounded
            />
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div className="md:hidden bg-[#242424]" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3"
            >
              {localStorage.getItem("authToken") ? (
                <button
                  className="text-white text-sm block px-3 py-2 font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/Auth"
                  className="text-white text-sm block px-3 py-2 font-medium"
                >
                  Login
                </Link>
              )}

              {localStorage.getItem("authToken") && (
                <>
                  <Link to="/Cart" className="text-white text-sm font-medium">
                    <div className="flex space-x-2 items-center justify-center py-4">
                      <img src={cart} alt="cart" />
                      <span>Cart</span>
                    </div>
                  </Link>
                  <Link
                    to="/myorders"
                    className="text-white text-sm font-medium"
                  >
                    <span>My Orders</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
