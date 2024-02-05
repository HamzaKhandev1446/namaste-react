export const generateRandomData = () => {
  const names = [
    "Ghousia Biryani",
    "Tasty Treats",
    "Spice Delight",
    "Flavor Haven",
    "Sizzling Grill",
    "Yummy Fusion",
    "Savoury Delicacies",
    "Taste of India",
    "Mouthwatering Meals",
    "Delicious Bites",
  ];
  const items = [
    "Biryani, Pulao, Daal chawal",
    "Pizza, Pasta, Salad",
    "Curry, Rice, Naan",
    "Burger, Fries, Shake",
    "Sushi, Ramen, Teriyaki",
    "Tacos, Burritos, Guacamole",
    "Steak, Mashed Potatoes, Vegetables",
    "Shawarma, Falafel, Hummus",
    "Noodles, Spring Rolls, Dim Sum",
    "Seafood Platter, Lobster, Shrimp",
  ];
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return Array.from({ length: 10 }, (_, index) => ({
    resName: names[index],
    items: items[index],
    rating: getRandomNumber(3, 5),
    waiting: getRandomNumber(20, 60),
  }));
};
