import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../Redux/Reducers/basketSlice';
import {greenColor, whiteTextColor} from '../../../assets/colors';

import Currency from 'react-currency-formatter';
import {useNavigation} from '@react-navigation/native';

const BasketTotalButton = () => {
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 20,
        backgroundColor: greenColor,
        borderRadius: 10,
        height: 70,
        width: '90%',
        maxWidth: 500,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={() => {
        navigation.navigate('Basket');
      }}>
      <View
        style={{
          margin: 10,
          height: '60%',
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#01A296',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: whiteTextColor,
          }}>
          {items.length}
        </Text>
      </View>

      <Text style={{fontSize: 20, fontWeight: 'bold', color: whiteTextColor}}>
        View Basket
      </Text>
      <View
        style={{
          height: '80%',
          marginRight: 10,
          justifyContent: 'center',
        }}>
        {total > 0 && (
          <Text
            style={{fontSize: 20, fontWeight: 'bold', color: whiteTextColor}}>
            <Currency quantity={total} currency={'GBP'} />
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BasketTotalButton;
