import celebrationCake from '../assets/celebration_cake_v3_1776343824180.png';
import dryFruitCake from '../assets/dry_fruit_cake_1776258725533.png';
import truffleCake from '../assets/truffle_cake_1776258741784.png';
import marbleCake from '../assets/marble_crunch_cake_1776258758887.png';
import blackForestCake from '../assets/black_forest_cake_1776258775431.png';
import pastryBox from '../assets/pastry_box_1776258804706.png';
import butterscotchPastry from '../assets/butterscotch_pastry_1776258821139.png';
import sweetCornPizza from '../assets/sweet_corn_pizza_1776258840621.png';
import paneerPizza from '../assets/paneer_pizza_1776258857624.png';
import chickenBurger from '../assets/chicken_burger_1776258875175.png';
import chickenFrankie from '../assets/chicken_frankie_1776258898664.png';
import puffSelection from '../assets/puff_selection_1776258916674.png';
import chickenBiryani from '../assets/chicken_biryani_1776258937987.png';
import muttonBiryani from '../assets/mutton_biryani_1776258957650.png';
import khajuBiryani from '../assets/khaju_biryani_1776258974881.png';
import garlicNaan from '../assets/garlic_naan_new_1776343375940.png';
import shakeFlight from '../assets/shake_flight_new_1776343412043.png';
import comboMeal from '../assets/combo_meal_1776343430663.png';
import kitkatShake from '../assets/kitkat_shake_1776343447345.png';
import virginMojito from '../assets/virgin_mojito_1776343464482.png';

export const categories = [
  'CAKES',
  'PASTRIES',
  'BREADS',
  'COOKIES',
  'FAST FOOD',
  'BIRYANI',
  'BEVERAGES',
  'COMBOS',
];

export const menuItems = [
  { id: 1, name: 'Multi-tiered Celebration Cake', price: 3500, category: 'CAKES', isVegetarian: true, description: 'A detailed, exquisite celebration cake.', image: celebrationCake },
  { id: 2, name: 'Dry Fruit Cool Cake', price: 1170, category: 'CAKES', isVegetarian: true, description: 'Rich premium dry fruit layers.', image: dryFruitCake },
  { id: 3, name: 'Chocolate Truffle Cool Cake', price: 910, category: 'CAKES', isVegetarian: true, description: 'Decadent chocolate truffle layers.', image: truffleCake },
  { id: 4, name: 'Marble Crunch Cake', price: 629, category: 'CAKES', isVegetarian: true, description: 'Crunchy marble texture and rich flavor.', image: marbleCake },
  { id: 5, name: 'Delicious Black Forest Cake', price: 529, category: 'CAKES', isVegetarian: true, description: 'Classic black forest favorite.', image: blackForestCake },
  { id: 6, name: 'Assorted Pastry Box (6 slices)', price: 234, category: 'PASTRIES', isVegetarian: true, description: 'A box with assorted pastry slices.', image: pastryBox },
  { id: 7, name: 'Butterscotch Pastry', price: 70, category: 'PASTRIES', isVegetarian: true, description: 'Single slice pastry with butterscotch.', image: butterscotchPastry },
  { id: 8, name: 'Sweet Corn Cheese Pizza (8 Inch)', price: 182, category: 'FAST FOOD', isVegetarian: true, description: 'Bestseller vegetarian pizza.', image: sweetCornPizza },
  { id: 9, name: 'Paneer Cheese Pizza (8 Inch)', price: 234, category: 'FAST FOOD', isVegetarian: true, description: 'Rich paneer topping pizza.', image: paneerPizza },
  { id: 10, name: 'Chicken Cheese Burger', price: 230, category: 'FAST FOOD', isVegetarian: false, description: 'Juicy chicken burger with cheese.', image: chickenBurger },
  { id: 11, name: 'Chicken Frankie Roll', price: 208, category: 'FAST FOOD', isVegetarian: false, description: 'Grilled chicken wrapped in soft bread.', image: chickenFrankie },
  { id: 12, name: 'Gourmet Savory Puff Selection', price: 156, category: 'FAST FOOD', isVegetarian: false, description: 'Box of assorted savory puffs.', image: puffSelection },
  { id: 13, name: 'Chicken Dum Briyani Single', price: 165, category: 'BIRYANI', isVegetarian: false, description: 'Bestseller single biryani.', image: chickenBiryani },
  { id: 14, name: 'Mutton Briyani', price: 430, category: 'BIRYANI', isVegetarian: false, description: 'Premium mutton biryani.', image: muttonBiryani },
  { id: 15, name: 'Khaju Briyani', price: 297, category: 'BIRYANI', isVegetarian: true, description: 'Vegetarian biryani with rich spices.', image: khajuBiryani },
  { id: 16, name: 'Butter Chicken Masala', price: 345, category: 'FAST FOOD', isVegetarian: false, description: 'Rich butter chicken gravy.', image: chickenBiryani },
  { id: 17, name: 'Paneer Butter Masala', price: 322, category: 'FAST FOOD', isVegetarian: true, description: 'Creamy paneer masala.', image: paneerPizza },
  { id: 18, name: 'Cheese Garlic Naan', price: 90, category: 'BREADS', isVegetarian: true, description: 'Toasted naan with garlic butter.', image: garlicNaan },
  { id: 19, name: 'Signature Shake Flight', price: 297, category: 'BEVERAGES', isVegetarian: true, description: 'Three premium mini shakes.', image: shakeFlight },
  { id: 20, name: '1 B/Scotch Milkshake + 1 Chkn Pizza', price: 373, category: 'COMBOS', isVegetarian: false, description: 'High-value combo meal.', image: comboMeal },
  { id: 21, name: 'Kitkat Shake Milkshake', price: 170, category: 'BEVERAGES', isVegetarian: true, description: 'Thick chocolate shake.', image: kitkatShake },
  { id: 22, name: 'Virgin Mojito', price: 105, category: 'BEVERAGES', isVegetarian: true, description: 'Refreshing mint mocktail.', image: virginMojito },
];

export const heroItems = [
  { id: 'h1', label: 'Chocolate Truffle Cake', image: truffleCake },
  { id: 'h2', label: 'Black Forest Cake', image: blackForestCake },
  { id: 'h3', label: 'Chicken Frankie', image: chickenFrankie },
  { id: 'h4', label: 'Shake Flight', image: shakeFlight },
];

export const getMenuByCategory = (activeCategory) =>
  activeCategory === 'ALL'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);
