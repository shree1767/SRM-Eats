import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Turn as Hamburger } from "hamburger-react";
import { useCart, useDispatchCart } from '../../Components/ContextReducer';
import logo from "./assets/Group 1.svg";
import cart from "./assets/material-symbols_shopping-cart-outline.svg";
import location from "./assets/locationico.svg";

export const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(2);
let data = useCart()
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Auth");
  };

  return (
    <nav className="bg-[#242424] fixed top-0 left-0 z-50 w-full border-y border-t-0 border-[#FA144B]">
      <div className="max-w-screen mx-auto py-5 px-5 sm:px-6 md:pl-10">
        <div className="flex items-center justify-between space-x-10 h-14">
          <div className="flex items-center">
            {localStorage.getItem("authToken") ? (
              <Link to="/Home" className="">
                <img className="md:w-[9vw] w-[20vw]" src={logo} alt="logo" />
              </Link>
            ) : (
              <Link to="/" className="">
                <img className="md:w-[9vw] w-[20vw]" src={logo} alt="logo" />
              </Link>
            )}

            {/*condition for selected dropdown value */}
            {props.selectedValue ? (
              <Link
                to="/"
                className="mx-7 flex space-x-2 text-white text-sm mx-7 items-center"
              >
                <img src={location} alt="location" className="w-5 h-5" />
                <p>{props.selectedValue}</p>
              </Link>
            ) : (
              <Link
                to="/"
                className="flex space-x-2 text-white text-sm mx-7 items-center"
              >
                <img src={location} alt="location" className="w-5 h-5" />
                <p>Select Location</p>
              </Link>
            )}
          </div>
          <div className="md:hidden relative">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              color="#fff"
              duration={0.5}
              rounded
            />
          </div>
          <div className="hidden md:block absolute right-0 mr-10">
            <div className="ml-10 flex space-x-4 items-center">
              {localStorage.getItem("authToken") ? (
                <>
                  <Link to="/Cart" className="text-white text-sm font-medium">
                    <div className="flex space-x-2 items-center ">
                      <img src={cart} alt="cart" className="w-5 h-5 mx-auto" />
                      {data.length > 0 && (
                        <span className="rounded-full py-1 px-2.5 bg-white text-[#FA144B] text-[10px]">
                          {data.length}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px]">Cart </span>
                  </Link>
                  

                  <Link
                    to="/myorders"
                    className="text-white text-sm font-medium"
                  >
                    <span>Orders</span>
                  </Link>
                </>
              ) : (
                " "
              )}
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
            </div>
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
          <div
            className={`fixed inset-x-0 inset-y-30 bg-[#242424] bg-opacity-95 flex items-center justify-center`}
            style={{ zIndex: 60 }}
          >
            <div className="md:hidden " id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-5 text-center sm:px-3">
                {localStorage.getItem("authToken") && (
                  <>
                    <Link
                      to="/Cart"
                      className="text-white text-sm mb-5 font-medium flex items-center justify-center"
                    >
                      <img src={cart} alt="cart" />
                      {data.length > 0 && (
                        <span className="rounded-full py-1 px-2.5 bg-white text-[#FA144B] text-[10px]">
                          {data.length}
                        </span>
                      )}
                    </Link>
                    <Link
                      to="/myorders"
                      className="text-white text-sm font-medium"
                    >
                      <span>Orders</span>
                    </Link>
                  </>
                )}
                {localStorage.getItem("authToken") ? (
                  <button
                    className="text-white mx-auto text-sm block px-3 py-2 font-medium"
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
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
