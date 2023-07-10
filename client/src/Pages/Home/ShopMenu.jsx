import React, { useState, useEffect } from "react";
import "./Home.module.css";
import Card from "../../Components/Card/Card";

const ShopMenu = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://srm-eats-c2xl.vercel.app/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className=" bg-white pt-[18vh] px-4 md:px-20">
      <nav className="flex space-x-4 md:space-x-8 items-center justify-between">
        <h3 className="text-xl md:text-2xl font-medium">Butty Corner</h3>
        <div className="flex space-x-5 ">
          {/* vegfilter */}
          <div className="flex items-center space-x-2 text-base">
            <span>Veg Only</span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
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
        </div>
      </nav>
      <hr className="my-5" />
      <div>
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div key={data._id} className="md:flex">
                  <div className="text-md font-medium py-3">
                    {data.Categoryname}
                  </div>
                  {foodItem.length !== 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.Categoryname === data.Categoryname &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id}>
                            <Card
                              foodItem ={filterItems}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Item</div>
                  )}
                </div>
              );
            })
          : " "}
      </div>
    </div>
  );
};

export default ShopMenu;
