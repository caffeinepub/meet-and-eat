export type MenuItem = { name: string; price: string };
export type MenuCategory = {
  id: string;
  label: string;
  image: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    image: "/assets/generated/menu-burgers.dim_600x400.jpg",
    items: [
      { name: "Zinger Burger", price: "399" },
      { name: "Double Dose Burger", price: "549" },
      { name: "Tower Cheese Burger", price: "649" },
      { name: "Crispy Petty Burger", price: "269" },
      { name: "Petty Cheese Burger", price: "349" },
      { name: "One Bite Burger", price: "299" },
    ],
  },
  {
    id: "grill",
    label: "Grill Burgers",
    image: "/assets/generated/menu-grill-burgers.dim_600x400.jpg",
    items: [
      { name: "Meet & Eat Special", price: "599" },
      { name: "Triple Grilled Burger", price: "399" },
      { name: "Cheese Grilled Burger", price: "499" },
      { name: "Thunder Spice Burger", price: "399" },
      { name: "Jalapeno Burger", price: "399" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    image: "/assets/generated/menu-sandwiches.dim_600x400.jpg",
    items: [
      { name: "Meet & Eat Special", price: "649" },
      { name: "Tex Mex Sandwich", price: "599" },
      { name: "Bar B Q Sandwich", price: "599" },
      { name: "Cocktail Sandwich", price: "599" },
      { name: "Oven Baked Sandwich", price: "449" },
      { name: "Mexican Sandwich", price: "799" },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    image: "/assets/generated/menu-wraps.dim_600x400.jpg",
    items: [
      { name: "Meet & Eat Special", price: "549" },
      { name: "Chicken Cheese Wrap", price: "599" },
      { name: "Tortilla Wrap", price: "549" },
      { name: "Grilled Pita Wrap", price: "499" },
      { name: "Crunchy Munchy Wrap", price: "549" },
      { name: "Garlic Mayo Wrap", price: "449" },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    image: "/assets/generated/menu-pizzas.dim_600x400.jpg",
    items: [
      {
        name: "Classic – Chicken Tikka (S/M/L/Party)",
        price: "499/949/1349/1899",
      },
      {
        name: "Classic – Chicken Fajita (S/M/L/Party)",
        price: "499/949/1349/1899",
      },
      { name: "Classic – Supreme (S/M/L/Party)", price: "499/949/1349/1899" },
      {
        name: "Classic – Hot & Spicy (S/M/L/Party)",
        price: "499/949/1349/1899",
      },
      {
        name: "Classic – Cheese Lover (S/M/L/Party)",
        price: "499/949/1349/1899",
      },
      { name: "Bumper – Xtreme Pizza (M/L/Party)", price: "1399/1899/2399" },
      { name: "Bumper – Donner Pizza (M/L/Party)", price: "1399/1899/2399" },
      { name: "Bumper – Lazania Pizza (M/L/Party)", price: "1399/1899/2399" },
      {
        name: "Signature – Meet & Eat Special (S/M/L/Party)",
        price: "549/1049/1549/2149",
      },
      {
        name: "Signature – Behari Kabab (S/M/L/Party)",
        price: "549/1049/1549/2149",
      },
      {
        name: "Signature – Malai Boti (S/M/L/Party)",
        price: "549/1049/1549/2149",
      },
      {
        name: "Signature – Achari Pizza (S/M/L/Party)",
        price: "549/1049/1549/2149",
      },
      { name: "Crust – Crown Crust (M/L/Party)", price: "1399/1749/2299" },
      { name: "Crust – Kabab Stuffer (M/L/Party)", price: "1399/1749/2299" },
      {
        name: "Crust – Chicken Cheese Crust (M/L/Party)",
        price: "1399/1749/2299",
      },
    ],
  },
  {
    id: "rolls",
    label: "Rolls",
    image: "/assets/generated/menu-rolls.dim_600x400.jpg",
    items: [
      { name: "Shawarma Roll", price: "249" },
      { name: "Crunchy Shawarma Roll", price: "349" },
      { name: "Pocket Shawarma", price: "249" },
      { name: "Malai Boti Spin Roll", price: "449" },
      { name: "Kababish Spin Roll", price: "349" },
      { name: "Chicken Paratha Roll", price: "349" },
      { name: "Crunchy Paratha Roll", price: "399" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    image: "/assets/generated/menu-pasta.dim_600x400.jpg",
    items: [
      { name: "Meet & Eat Special", price: "699" },
      { name: "Flaming Pasta", price: "649" },
      { name: "Kababish Pasta", price: "699" },
      { name: "Crunchy Munchy Pasta", price: "749" },
      { name: "Malai Boti Pasta", price: "799" },
      { name: "Matka Pasta", price: "849" },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    image: "/assets/generated/menu-wings.dim_600x400.jpg",
    items: [
      { name: "Crispy Hot Wings (5pc)", price: "599" },
      { name: "Oven Baked Wings (5pc)", price: "649" },
      { name: "BBQ Wings (5pc)", price: "699" },
      { name: "Baked Honey Chili Wings (5pc)", price: "699" },
      { name: "Crispy Honey Chili Wings (5pc)", price: "699" },
      { name: "Nuggets (5pc / 10pc)", price: "249 / 499" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    image: "/assets/generated/menu-sides.dim_600x400.jpg",
    items: [
      { name: "Masala Fries", price: "249" },
      { name: "Loaded Fries", price: "499" },
      { name: "Matka Fries", price: "699" },
      { name: "Behari Platter", price: "799" },
      { name: "Malai Boti Platter", price: "749" },
      { name: "Shawarma Platter", price: "549" },
    ],
  },
  {
    id: "steak",
    label: "Steak",
    image: "/assets/generated/menu-steak.dim_600x400.jpg",
    items: [
      { name: "Special Steak", price: "1,349" },
      { name: "Mexican Steak", price: "1,249" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks & Dessert",
    image: "/assets/generated/menu-drinks.dim_600x400.jpg",
    items: [
      { name: "Mint Margarita (M/L)", price: "249/299" },
      { name: "Special Margarita (M/L)", price: "249/299" },
      { name: "Lemon Margarita (M/L)", price: "249/299" },
      { name: "Strawberry Margarita (M/L)", price: "249/299" },
      { name: "Fresh Lime", price: "249" },
      { name: "Molten Lava Cake", price: "549" },
    ],
  },
  {
    id: "combos",
    label: "Combo Deals",
    image: "/assets/generated/menu-combos.dim_600x400.jpg",
    items: [
      { name: "Yaari Deal", price: "1,999" },
      { name: "Crazy Deal", price: "1,349" },
      { name: "Budget Bites", price: "1,199" },
      { name: "Super Duper", price: "1,249" },
      { name: "Grill Thrill Combo", price: "1,199" },
      { name: "Wrap Battle", price: "1,199" },
      { name: "Big Bite Deal", price: "1,799" },
      { name: "Kings Meal", price: "2,299" },
      { name: "Combo Deal", price: "1,999" },
      { name: "Crazy Deal 2", price: "2,299" },
      { name: "Snack Attack Deal", price: "2,999" },
      { name: "Any Time Deal", price: "2,249" },
      { name: "Weekend Treat (Sat–Sun)", price: "2,888" },
      { name: "5 Zingers Deal", price: "1,799" },
      { name: "Zingerest Deal", price: "1,349" },
      { name: "Burgurzz Deal", price: "649" },
      { name: "Combo Craving 1", price: "999" },
      { name: "Combo Craving 2", price: "1,199" },
      { name: "Combo Craving 3", price: "1,499" },
      { name: "Combo Craving 4", price: "1,349" },
    ],
  },
];
