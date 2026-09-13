export type MenuCategory =
  | 'ALL'
  | 'SMASH BURGERS'
  | 'CHICKEN'
  | 'WRAPS'
  | 'WINGS'
  | 'FRIES'
  | 'DRINKS'
  | 'EXTRAS';

export const MENU_CATEGORIES: MenuCategory[] = [
  'ALL',
  'SMASH BURGERS',
  'CHICKEN',
  'WRAPS',
  'WINGS',
  'FRIES',
  'DRINKS',
  'EXTRAS',
];

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  tag?: string;
  spicyLevel?: number;
  ingredients?: string[];
  isBestseller?: boolean;
}

export const signatureNoshSmash: MenuItem = {
  id: 'nosh-smash-signature',
  name: 'Nosh Smash Burger',
  category: 'SMASH BURGERS',
  price: 680,
  description: 'Juicy beef patties, special NOSH sauce, buttered toasted bun, ketchup, pickles and cheese.',
  image: '/images/smash-burger-hero.jpg',
  tag: 'SIGNATURE HERO',
  spicyLevel: 1,
  ingredients: ['Twin Beef Patties', 'NOSH Secret Sauce', 'Buttered Brioche', 'Melted Cheddar', 'Dill Pickles', 'Ketchup'],
  isBestseller: true,
};

export const allMenuItems: MenuItem[] = [
  // SMASH BURGERS
  signatureNoshSmash,
  {
    id: 'jalapeno-smash',
    name: 'Jalapeño Smash Burger',
    category: 'SMASH BURGERS',
    price: 680,
    description: 'Crispy lacy smashed beef patty, charred pickled jalapeños, melted cheddar cheese, and spicy jalapeño crema on a toasted bun.',
    image: '/images/image-21.jpg',
    tag: 'SPICY HIT',
    spicyLevel: 2,
    ingredients: ['Smashed Beef', 'Charred Jalapeños', 'Real American Cheese', 'Jalapeño Crema', 'Toasted Brioche'],
    isBestseller: true,
  },
  {
    id: 'shroomer-smash',
    name: 'Shroomer Smash Burger',
    category: 'SMASH BURGERS',
    price: 680,
    description: 'Smashed beef patties smothered in butter-sautéed button mushrooms, melted Swiss cheese, caramelized onions, and garlic herb aioli.',
    image: '/images/image-04.jpg',
    tag: 'GOURMET',
    spicyLevel: 1,
    ingredients: ['Smashed Beef', 'Sautéed Mushrooms', 'Melted Cheese', 'Caramelized Onions', 'Garlic Aioli'],
  },
  {
    id: 'oklahoma-smash',
    name: 'Oklahoma Onion Smash Burger',
    category: 'SMASH BURGERS',
    price: 680,
    description: 'Ultra-thin shaved sweet onions pressed deeply into screaming hot beef patties until sweet, caramelized & crispy with molten cheddar.',
    image: '/images/image-01.jpg',
    tag: 'CRISPY ONIONS',
    spicyLevel: 1,
    ingredients: ['Prime Beef', 'Shaved Sweet Onions', 'Double Cheddar', 'NOSH Sauce', 'Potato Bun'],
  },
  {
    id: 'bbq-smash',
    name: 'BBQ Smash Burger',
    category: 'SMASH BURGERS',
    price: 830,
    description: 'Double beef smash patties, smoky dark molasses BBQ glaze, crispy fried onion ring strings, cheddar cheese, and pickles.',
    image: '/images/image-22.jpg',
    tag: 'SMOKY DELUXE',
    spicyLevel: 1,
    ingredients: ['Double Beef', 'Hickory BBQ Glaze', 'Crispy Onion Tangles', 'Cheddar', 'Toasted Bun'],
    isBestseller: true,
  },

  // CHICKEN
  {
    id: 'nosh-zing-burger',
    name: 'Nosh Zing Burger',
    category: 'CHICKEN',
    price: 650,
    description: 'Massive golden crispy chicken fillet marinated 24 hours in spiced buttermilk, house secret mayo, crunchy lettuce, and cheddar on a soft sesame bun.',
    image: '/images/image-20.jpg',
    tag: 'COLOSSAL CRUNCH',
    spicyLevel: 1,
    ingredients: ['Buttermilk Fried Chicken', 'Crunchy Shredded Slaw', 'NOSH Mayo', 'Melted Cheese', 'Sesame Bun'],
    isBestseller: true,
  },
  {
    id: 'flamin-zing-burger',
    name: 'Flamin Zing Burger',
    category: 'CHICKEN',
    price: 650,
    description: 'Colossal crispy fried chicken drenched in fiery Nashville hot red chili glaze, jalapeño slices, cooling creamy slaw, and melted cheddar.',
    image: '/images/image-17.jpg',
    tag: 'FIERY HOT',
    spicyLevel: 3,
    ingredients: ['Fiery Spiced Chicken', 'Nashville Chili Oil', 'Pickled Jalapeños', 'Cool Slaw', 'Brioche Bun'],
    isBestseller: true,
  },

  // WRAPS
  {
    id: 'grilled-chicken-wrap',
    name: 'Grilled Chicken Wrap',
    category: 'WRAPS',
    price: 700,
    description: 'Char-grilled herb chicken strips, crisp iceberg lettuce, sliced tomatoes, red onions, and creamy garlic yogurt sauce wrapped in toasted flatbread.',
    image: '/images/image-18.jpg',
    tag: 'CHAR-GRILLED',
    spicyLevel: 1,
    ingredients: ['Herb Grilled Chicken', 'Crisp Greens', 'Tomatoes', 'Red Onions', 'Garlic Yogurt Sauce', 'Toasted Tortilla'],
  },
  {
    id: 'nosh-zing-chicken-wrap',
    name: 'Nosh Zing Chicken Wrap',
    category: 'WRAPS',
    price: 650,
    description: 'Crunchy golden chicken tenders wrapped in flaky warm paratha with shredded cabbage, pickles, and signature NOSH sauce drizzle.',
    image: '/images/image-18.jpg',
    tag: 'CRISPY WRAP',
    spicyLevel: 1,
    ingredients: ['Golden Chicken Tenders', 'Flaky Paratha', 'NOSH Sauce', 'Pickles', 'Melted Cheese'],
    isBestseller: true,
  },
  {
    id: 'flamin-zing-chicken-wrap',
    name: 'Flamin Zing Chicken Wrap',
    category: 'WRAPS',
    price: 650,
    description: 'Spicy crusted chicken strips rolled with spicy chipotle mayo, sliced jalapeños, onions, and melted cheese in a toasted roll.',
    image: '/images/image-18.jpg',
    tag: 'SPICY ROLL',
    spicyLevel: 3,
    ingredients: ['Spicy Fried Strips', 'Chipotle Sauce', 'Jalapeños', 'Red Onions', 'Toasted Wrap'],
  },

  // WINGS & CHICKEN
  {
    id: 'crispy-wings-6pc',
    name: 'Crispy Wings — 6 Pieces',
    category: 'WINGS',
    price: 480,
    description: 'Six jumbo bone-in wings double-dredged for shatteringly crisp skin, seasoned with signature NOSH spice blend.',
    image: '/images/image-15.jpg',
    tag: 'CRUNCHY 6PC',
    spicyLevel: 2,
    ingredients: ['6x Fresh Jumbo Wings', 'Secret Spice Dust', 'Garlic Mayo Dip'],
    isBestseller: true,
  },
  {
    id: 'crispy-bbq-wings-6pc',
    name: 'Crispy BBQ Wings — 6 Pieces',
    category: 'WINGS',
    price: 600,
    description: 'Six ultra-crispy wings tossed and glazed in sticky hickory oak smoked BBQ reduction and toasted sesame seeds.',
    image: '/images/image-14.jpg',
    tag: 'SMOKY GLAZE',
    spicyLevel: 1,
    ingredients: ['6x Crispy Wings', 'Hickory BBQ Glaze', 'Sesame Seeds', 'Ranch Dip'],
  },
  {
    id: 'chicken-strips-3pc',
    name: 'Chicken Strips — 3 Pieces + Sauce Dip',
    category: 'WINGS',
    price: 560,
    description: 'Three colossal 100% chicken breast tenderloins fried to golden perfection, served with your choice of house sauce dip.',
    image: '/images/image-12.jpg',
    tag: 'TENDERLOINS',
    spicyLevel: 1,
    ingredients: ['3x Giant Chicken Tenders', 'Choice of Dip', 'Seasoned Batter'],
    isBestseller: true,
  },

  // FRIES
  {
    id: 'plain-fries',
    name: 'Plain Fries',
    category: 'FRIES',
    price: 238,
    description: 'Crispy salted golden crinkle-cut fries fried hot and fresh to order.',
    image: '/images/loaded-fries.jpg',
    tag: 'CLASSIC CRINKLE',
    ingredients: ['Idaho Potatoes', 'Sea Salt', 'Crisp Fry'],
  },
  {
    id: 'nosh-signature-tender-fries',
    name: 'Nosh Signature Tender Fries',
    category: 'FRIES',
    price: 670,
    description: 'Crinkle fries topped with crispy chicken tender bites, molten cheddar cheese, jalapeños, and drizzled with NOSH special sauce.',
    image: '/images/image-10.jpg',
    tag: 'LOADED MONSTER',
    spicyLevel: 2,
    ingredients: ['Golden Fries', 'Crispy Chicken Bites', 'Liquid Cheddar', 'NOSH Sauce', 'Jalapeños'],
    isBestseller: true,
  },
  {
    id: 'curly-fries',
    name: 'Curly Fries',
    category: 'FRIES',
    price: 438,
    description: 'Seasoned spiral curly fries coated in paprika, onion, and garlic spice blend with crisp crunchy coils.',
    image: '/images/loaded-fries.jpg',
    tag: 'SPIRAL CRUNCH',
    ingredients: ['Spiral Cut Potatoes', 'Paprika Spice Dust', 'Crispy Coat'],
  },
  {
    id: 'waffle-fries',
    name: 'Waffle Fries',
    category: 'FRIES',
    price: 438,
    description: 'Lattice-cut golden waffle fries with maximum surface crispiness and fluffy potato center.',
    image: '/images/image-10.jpg',
    tag: 'LATTICE CUT',
    ingredients: ['Lattice Waffle Potatoes', 'Herb Salt'],
  },

  // DRINKS
  {
    id: 'pepsi-drink',
    name: 'Pepsi',
    category: 'DRINKS',
    price: 150,
    description: 'Ice-cold refreshing bottle of classic Pepsi cola.',
    image: '/images/image-11.jpg',
    tag: 'CHILLED 345ML',
    ingredients: ['Chilled Pepsi Cola', 'Served Ice Cold'],
  },
  {
    id: '7up-drink',
    name: '7-Up',
    category: 'DRINKS',
    price: 150,
    description: 'Crisp, sparkling lemon-lime refreshment in an ice-cold can.',
    image: '/images/image-08.jpg',
    tag: 'CHILLED 345ML',
    ingredients: ['Sparkling Lemon-Lime', 'Served Ice Cold'],
  },
  {
    id: 'peach-iced-tea',
    name: 'Peach Iced Tea',
    category: 'DRINKS',
    price: 220,
    description: 'Brewed black tea infused with sweet peach puree, served chilled over crushed ice.',
    image: '/images/image-09.jpg',
    tag: 'HOUSE BREWED',
    ingredients: ['Brewed Black Tea', 'Natural Peach Puree', 'Fresh Mint', 'Crushed Ice'],
    isBestseller: true,
  },

  // EXTRAS
  {
    id: 'extra-cheese-slice',
    name: 'Cheese Slice',
    category: 'EXTRAS',
    price: 125,
    description: 'An extra slice of real melted American cheddar cheese.',
    image: '/images/image-22.jpg',
    tag: 'ADD-ON',
    ingredients: ['Real American Cheddar'],
  },
  {
    id: 'extra-zing-patty',
    name: 'Extra Zing Patty',
    category: 'EXTRAS',
    price: 250,
    description: 'An extra crunchy, spiced buttermilk fried colossal chicken fillet.',
    image: '/images/image-20.jpg',
    tag: 'CHICKEN ADD-ON',
    ingredients: ['Crispy Buttermilk Chicken Breast'],
  },
  {
    id: 'extra-beef-patty',
    name: 'Extra Beef Patty',
    category: 'EXTRAS',
    price: 375,
    description: 'An additional fresh smashed prime beef patty with crispy lacy crust.',
    image: '/images/smash-burger-hero.jpg',
    tag: 'BEEF ADD-ON',
    ingredients: ['100% Prime Smashed Beef'],
  },
  {
    id: 'jalapeno-slice-dip',
    name: 'Jalapeño Slice Dip',
    category: 'EXTRAS',
    price: 62.5,
    description: 'Portion of spicy sliced pickled jalapeños.',
    image: '/images/image-21.jpg',
    tag: 'DIP CUP',
    ingredients: ['Pickled Jalapeños in Brine'],
  },
  {
    id: 'pickles-slice-dip',
    name: 'Pickles Slice Dip',
    category: 'EXTRAS',
    price: 62.5,
    description: 'Crunchy sweet-sour dill pickle slices.',
    image: '/images/image-04.jpg',
    tag: 'DIP CUP',
    ingredients: ['Dill Pickles Slices'],
  },
  {
    id: 'nosh-sauce-dip',
    name: 'Nosh Sauce',
    category: 'EXTRAS',
    price: 112.5,
    description: 'Signature house secret smoky paprika burger sauce dip.',
    image: '/images/smash-burger-hero.jpg',
    tag: 'HOUSE DIP',
    ingredients: ['NOSH Secret Emulsion Cup'],
  },
  {
    id: 'jalapeno-sauce-dip',
    name: 'Jalapeño Sauce',
    category: 'EXTRAS',
    price: 112.5,
    description: 'Charred serrano & green jalapeño lime crema dip.',
    image: '/images/image-21.jpg',
    tag: 'SPICY DIP',
    ingredients: ['Jalapeño Herb Crema Cup'],
  },
  {
    id: 'atomic-sauce-dip',
    name: 'Atomic Sauce',
    category: 'EXTRAS',
    price: 112.5,
    description: 'Volcanic ghost pepper & habanero fire dip.',
    image: '/images/image-17.jpg',
    tag: 'VOLCANIC DIP',
    ingredients: ['Ghost Pepper Glaze Cup'],
  },
  {
    id: 'bbq-sauce-dip',
    name: 'BBQ Sauce',
    category: 'EXTRAS',
    price: 187.5,
    description: 'Slow-simmered hickory molasses BBQ dip.',
    image: '/images/image-14.jpg',
    tag: 'SMOKY DIP',
    ingredients: ['Hickory BBQ Glaze Cup'],
  },
];

// Alias for backward compatibility
export const menuItems = allMenuItems;
