import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext"; 

import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";

import "./Body.scss";

const Body = () => {
  const [restaurantsData, setrestaurantsData] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { userName, setUserName } = useContext(UserContext);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>There is some issue with your internet. Please check</h1>;
  }

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

        <input
          type="text"
          placeholder="Edit User"
          className="search-bar"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) =>
          restaurant?.card.card.info?.id ? (
            <Link
              key={restaurant?.card.card.info?.id}
              to={"/restaurants/" + restaurant?.card.card.info?.id}
            >
              {restaurant?.card?.card?.info?.avgRating > 4 ? (
                <PromotedRestaurantCard
                  key={restaurant?.card.card.info?.id}
                  restaurantsData={restaurant}
                />
              ) : (
                <RestaurantCard
                  key={restaurant?.card.card.info?.id}
                  restaurantsData={restaurant}
                />
              )}
            </Link>
          ) : null
        )}
      </div>
    </>
  );
};

export default Body;
