import RestaurantCard from "./RestaurantCard";
import { generateRandomData } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantsData, setrestaurantsData] = useState(generateRandomData());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    setrestaurantsData(json.data.cards);
  };

  return (
    <div className="body">
      <div className="search-field">
        <button
          className="search-button"
          onClick={() => {
            const filteredData = restaurantsData.filter((restaurant) => {
              return restaurant.rating > 4;
            });
            setrestaurantsData(filteredData);
          }}
        >
          Filter
        </button>
      </div>

      <div className="res-container">
        {restaurantsData.map((restaurant, index) => (
          <RestaurantCard key={index} restaurantsData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
