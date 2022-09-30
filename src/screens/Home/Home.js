import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import Categories from '../../components/Categories/Categories';
import FeatureRow from '../../components/FeatureRow/FeatureRow';
import Header from '../../components/Header/Header';

const featureRowOneData = [
  {
    id: 1,
    name: "Nando's",
    image:
      'https://media.istockphoto.com/photos/grill-picture-id472719534?k=20&m=472719534&s=612x612&w=0&h=Sk-FELFwWlTI1wqy5Km9jDWc2-T7U7GPz7wi6wEnQV8=',
    rate: 4.6,
    category: 'Offers',
    near: 'Nearby',
    location: 'Clink Street',
    dishes: [
      {
        id: 1,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 2,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 3,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
  {
    id: 2,
    name: 'Yo! Sushi',
    image:
      'https://st2.depositphotos.com/1020618/6765/i/450/depositphotos_67657295-stock-photo-japanese-seafood-sushi-set.jpg',
    rate: 4.8,
    category: 'Offers',
    near: 'Nearby',
    location: 'Tottenham',
    dishes: [
      {
        id: 4,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 5,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 6,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
  {
    id: 3,
    name: 'Hello Pizza!',
    image:
      'https://us.123rf.com/450wm/fotoatelie/fotoatelie1602/fotoatelie160200055/53192964-couper-en-tranches-d%C3%A9licieuses-pizzas-fra%C3%AEches-aux-champignons-et-pepperoni-sur-un-fond-sombre-vue-d.jpg?ver=6',
    rate: 4.1,
    category: 'Pizza',
    near: 'Nearby',
    location: 'Liverpool Park',
    dishes: [
      {
        id: 7,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 8,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 9,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
];

const featureRowTwoData = [
  {
    id: 1,
    name: 'KFC',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
    rate: 4.2,
    category: 'Offers',
    near: 'Nearby',
    location: 'Waterloo',
    dishes: [
      {
        id: 10,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 11,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 12,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
  {
    id: 2,
    name: 'Wagamama',
    image:
      'https://i0.wp.com/plantbasednews.org/wp-content/uploads/2021/10/wagamama.jpg?fit=1201%2C675&ssl=1',
    rate: 5,
    category: 'Asian',
    near: 'Faraway',
    location: 'Southban',
    dishes: [
      {
        id: 13,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 14,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 15,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
  {
    id: 3,
    name: 'Hello Pizza!',
    image:
      'https://us.123rf.com/450wm/fotoatelie/fotoatelie1602/fotoatelie160200055/53192964-couper-en-tranches-d%C3%A9licieuses-pizzas-fra%C3%AEches-aux-champignons-et-pepperoni-sur-un-fond-sombre-vue-d.jpg?ver=6',
    rate: 4.1,
    category: 'Pizza',
    near: 'Nearby',
    location: 'Liverpool Park',
    dishes: [
      {
        id: 16,
        name: 'PERi-PERi Nuts',
        image:
          'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
        decription:
          'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
        price: 3.75,
      },
      {
        id: 17,
        name: '3 Chicken Wings',
        image:
          'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
      {
        id: 18,
        name: '3 Chicken Wings',
        image:
          'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

        decription:
          'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
        price: 4.5,
      },
    ],
    decription:
      "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
  },
];

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header />

      {/* Body */}

      <ScrollView contentContainerStyle={{}}>
        <Categories />

        <FeatureRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          restaurants={featureRowOneData}
          navigation={navigation}
        />
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          restaurants={featureRowTwoData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
