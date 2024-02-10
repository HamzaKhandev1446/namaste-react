import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
      fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const jsonData = await data.json();
        setMenu(jsonData?.data);
      };
    return menu;
}

export default useRestaurantMenu;