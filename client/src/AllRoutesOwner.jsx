import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Owner/Dashboard';
import Auth from './Pages/Auth/Auth';

const AllRoutesOwner = () => {
  return (
   <>
    <Routes>
        <Route
          path="/ownerdashboard"
          element={localStorage.getItem("authToken") ? <Dashboard /> : <Auth />}
        />
    </Routes>
   </>
  )
}

export default AllRoutesOwner