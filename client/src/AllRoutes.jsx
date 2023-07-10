import React from "react";
import { Routes, Route } from "react-router-dom";

import { Landing } from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import ShopMenu from "./Pages/Home/ShopMenu";
import Auth from "./Pages/Auth/Auth";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart/Cart";

const AllRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              state={props.state}
              selectedValue={props.selectedValue}
              handleChange={props.handleChange}
            />
          }
        />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/Home"
          element={localStorage.getItem("authToken") ? <Home /> : <Auth />}
        />

        <Route
          path="/shopMenu/:shopName"
          element={localStorage.getItem("authToken") ? <ShopMenu /> : <Auth />}
        />

        <Route
          path="/Cart"
          element={localStorage.getItem("authToken") ? <Cart /> : <Auth />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
