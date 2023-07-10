import React, { useState, useEffect } from "react";
import "./Home.module.css";
import ShopCard from "../../Components/Card/ShopCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [foodShop, setFoodShop] = useState([]);
  const [search, setSearch] = useState("");
  const loadData = async () => {
    let response = await fetch("srm-eats-c2xl.vercel.app/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodShop(response[2]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="pt-[18vh] bg-white  px-4 md:px-20">
      <nav className="flex space-x-4 md:space-x-8 items-center justify-between">
        <h3 className="text-xl md:text-2xl font-medium">Restaurants Nearby</h3>
        {/* search */}
        <div className="hidden md:block border">
          <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </nav>
      <hr className="my-5" />

      {/* shops*/}
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {foodShop.length !== 0
          ? foodShop
              .filter((shop) =>
                shop.shopName.toLowerCase().includes(search.toLowerCase())
              )
              .map((shopData) => {
                return (
                  <div key={shopData._id}>
                    <Link to={`/shopMenu/${shopData.shopName}`}>
                      <ShopCard
                        shopName={shopData.shopName}
                        imgsrc={shopData.imgUrl}
                      />
                    </Link>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default Home;
