import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  blackText,
  greenColor,
  greenRestaurantsStars,
  greyTextLight,
  whiteColor,
} from '../../../assets/colors';

import {Icon} from 'react-native-elements';

import DishRow from '../../components/DishRow/DishRow';
import BasketTotalButton from '../../components/BasketTotalButton/BasketTotalButton';
import {useDispatch, useSelector} from 'react-redux';
import {selectBasketItems} from '../../Redux/Reducers/basketSlice';
import {setRestaurant} from '../../Redux/Reducers/restaurantSlice';

// const data = {
//   id: 1,
//   name: "Nando's",
//   image:
//     'https://media.istockphoto.com/photos/grill-picture-id472719534?k=20&m=472719534&s=612x612&w=0&h=Sk-FELFwWlTI1wqy5Km9jDWc2-T7U7GPz7wi6wEnQV8=',
//   rate: 4.6,
//   category: 'Offers',
//   near: 'Nearby',
//   location: 'Clink Street',
//   dishes: [
//     {
//       id: 1,
//       name: 'PERi-PERi Nuts',
//       image:
//         'https://2.wlimg.com/product_images/bc-full/2020/4/7115881/peri-peri-cashew-nuts-1586786340-5341173.jpeg',
//       decription:
//         'Crunchy akmonds, cachews and macadamia nuts in fiery PERi-PER-i seasoning. Serves 2-3',
//       price: 3.75,
//     },
//     {
//       id: 2,
//       name: '3 Chicken Wings',
//       image:
//         'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
//       decription:
//         'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
//       price: 4.5,
//     },
//     {
//       id: 3,
//       name: '3 Chicken Wings',
//       image:
//         'https://img.freepik.com/photos-gratuite/melanger-pizza-poulet-tomate-poivron-olives-champignon-vue-laterale_141793-3167.jpg?w=2000',

//       decription:
//         'Flame-grilled, infused with PERi-PER-i and perfect for pairing with sides, Served in your choice of spice',
//       price: 4.5,
//     },
//   ],
//   decription:
//     "Nando's is a South African multinational fast casual chain that speclialises in flame-grilled peri-peri style chicken",
// };

const Restaurant = ({route, navigation}) => {
  const dispatch = useDispatch();
  const data = route.params.data;
  const items = useSelector(selectBasketItems);

  useEffect(() => {
    dispatch(setRestaurant(data));
  }, [dispatch]);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Image
          source={{uri: data.image}}
          style={{height: 250, width: '100%'}}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 20,
            top: 50,
            padding: 5,
            borderRadius: 40 / 2,
            backgroundColor: whiteColor,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" type="feather" size={30} color={greenColor} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: whiteColor,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: blackText}}>
            {data.name}
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Icon
              name="star"
              type="antdesign"
              size={20}
              color={greenRestaurantsStars}
              style={{paddingRight: 5}}
            />
            <Text
              style={{
                color: 'green',
              }}>
              {data.rate}
            </Text>
            <Text style={{color: greyTextLight}}> · {data.category}</Text>
            <Icon
              name="location"
              type="octicon"
              size={23}
              color={greyTextLight}
              style={{paddingLeft: 10, paddingRight: 5}}
            />
            <Text style={{color: greyTextLight}}>{data.near}</Text>
            <Text style={{color: greyTextLight, paddingHorizontal: 3}}>·</Text>
            <Text style={{color: greyTextLight}}>{data.location}</Text>
          </View>
          <Text style={{textAlign: 'justify', color: greyTextLight}}>
            {data.decription}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginTop: 2,
            backgroundColor: whiteColor,
            height: 60,
          }}>
          <Icon
            name="question"
            type="octicon"
            size={23}
            color={greyTextLight}
            style={{paddingLeft: 10, paddingRight: 5}}
          />
          <Text
            style={{
              paddingHorizontal: 10,
              color: greyTextLight,
              flex: 1,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Have a food allergy ?
          </Text>
          <Icon
            name="chevron-right"
            type="entypo"
            size={23}
            color={greenColor}
            style={{paddingLeft: 10, paddingRight: 5}}
          />
        </View>
        {data.dishes && data.dishes.length > 0 && (
          <View style={{paddingBottom: items.length > 0 ? 100 : 5}}>
            <Text
              style={{
                padding: 16,
                fontSize: 20,
                fontWeight: 'bold',
                color: blackText,
              }}>
              Menu
            </Text>

            {data.dishes.map(dish => {
              return (
                <DishRow
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  image={dish.image}
                  decription={dish.decription}
                  price={dish.price}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
      {items.length > 0 && <BasketTotalButton />}
    </View>
  );
};

export default Restaurant;
