import { CDN_URL } from "../utils/constants";
import Rating from "./Rating";
import "./RestaurantCard.scss";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ restaurantsData }) => {
  const user = useContext(UserContext);
  console.log(user?.loggedInUser);
  // Check if restaurantsData and its nested properties exist
  if (
    !restaurantsData ||
    !restaurantsData.card ||
    !restaurantsData.card.card ||
    !restaurantsData.card.card.info
  ) {
    // Handle the case where the data is not available
    return <span></span>;
  }

  // Destructure the nested properties
  const { avgRating, sla, name, cloudinaryImageId, cuisines } =
    restaurantsData.card.card.info;

  // Additional destructuring (update as needed)
  const { price } = restaurantsData.card.card;

  return (
    <>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src={CDN_URL + cloudinaryImageId}
            alt="NFT"
          />
          <h2>{name}</h2>
          <p className="description">{cuisines.join(", ")}</p>
          <div className="tokenInfo">
            <div className="price">
              <p>{price}</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>{sla?.deliveryTime}</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div>
              <Rating rating={avgRating} fillColor="gold" />
            </div>
          </div>
          <p>{user?.loggedInUser}</p>
        </div>
      </div>
    </>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <p className="highest-rated">Higehset Rated</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
