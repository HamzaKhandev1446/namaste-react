import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Body.scss";

const Body = () => {
  const [restaurantsData, setrestaurantsData] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    setrestaurantsData(json.data.cards);
    setfilteredRestaurants(json.data.cards);
  };

  return (
    <>
      <div className="top-body-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const filteredData = restaurantsData.filter((restaurant) => {
                return restaurant?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="search-button"
          onClick={() => {
            const filteredData = restaurantsData.filter((restaurant) => {
              return restaurant?.card?.card?.info?.avgRating > 4;
            });
            setfilteredRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => (
          restaurant?.card.card.info?.id ?
          <Link
            key={restaurant?.card.card.info?.id}
            to={"/restaurants/" + restaurant?.card.card.info?.id}
          >
            <RestaurantCard
              key={restaurant?.card.card.info?.id}
              restaurantsData={restaurant}
            />
          </Link>
          : null
        ))}
      </div>
    </>
  );
};

export default Body;
