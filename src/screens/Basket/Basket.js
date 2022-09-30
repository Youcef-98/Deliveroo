import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../../Redux/Reducers/restaurantSlice';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../Redux/Reducers/basketSlice';
import BasketHeader from '../../components/BasketHeader/BasketHeader';
import BasketDeliveryTime from '../../components/BasketDeliveryTime/BasketDeliveryTime';
import BasketOrderedDishes from '../../components/BasketOrderedDishes/BasketOrderedDishes';
import BasketPricing from '../../components/BasketPricing/BasketPricing';

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  const groupedItemsInBasket = useMemo(() => {
    return items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
  }, [items]);
  console.log(groupedItemsInBasket);
  return (
    <SafeAreaView style={{flex: 1}}>
      <BasketHeader name={restaurant.name} />
      <BasketDeliveryTime />
      <BasketOrderedDishes dishes={groupedItemsInBasket} />
      <BasketPricing total={total} />
    </SafeAreaView>
  );
};

export default Basket;
