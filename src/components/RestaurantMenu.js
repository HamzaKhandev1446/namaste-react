import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (!resInfo) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.bannerId}>
              {item?.title} -{" "}
              {item?.dish?.info?.price / 100 ||
                item?.dish?.info?.defaultPrice / 100}{" "}
              Rs{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
