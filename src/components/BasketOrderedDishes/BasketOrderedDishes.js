import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {blackText, greenColor, whiteColor} from '../../../assets/colors';
import {removeFromBasket} from '../../Redux/Reducers/basketSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketOrderedDishes = props => {
  const imageDimension = 60;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dishes = props.dishes;
  return (
    <ScrollView style={{backgroundColor: whiteColor}}>
      {Object.entries(dishes).map((dish, key) => (
        <View
          key={key}
          style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
          <Text style={{color: greenColor, fontSize: 15}}>
            {dish[1].length} x
          </Text>

          <Image
            source={{
              uri: dish[1][0].image,
            }}
            style={{
              height: imageDimension,
              width: imageDimension,
              padding: 5,
              marginHorizontal: 10,
              borderRadius: imageDimension / 2,
            }}
          />

          <Text style={{color: blackText, flex: 1, fontSize: 15}}>
            {dish[1][0].name}
          </Text>
          <Text style={{color: blackText, marginHorizontal: 10, fontSize: 15}}>
            <Currency quantity={dish[1][0].price} currency={'GBP'} />
          </Text>
          <Text
            style={{color: greenColor, fontSize: 15}}
            onPress={() => {
              dispatch(removeFromBasket({id: dish[1][0].id}));
              if (
                Object.entries(dishes).length == 1 &&
                Object.entries(dishes)[0][1].length == 1
              ) {
                navigation.goBack();
              }
            }}>
            Remove
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default BasketOrderedDishes;
