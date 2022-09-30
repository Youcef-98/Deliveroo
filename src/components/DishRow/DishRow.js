import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  greenColor,
  greybgImage,
  greyTextLight,
  whiteColor,
} from '../../../assets/colors';

import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemWithId,
} from '../../Redux/Reducers/basketSlice';

import Currency from 'react-currency-formatter';

const DishRow = props => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(selectBasketItems);
  const item = useSelector(state => selectBasketItemWithId(state, props.id));
  const dispatch = useDispatch();

  return (
    <View style={{marginBottom: 2}}>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        style={{flexDirection: 'row', backgroundColor: whiteColor}}>
        <View
          style={{
            width: '70%',
            paddingLeft: 16,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 18}}>{props.name}</Text>
          <Text style={{textAlign: 'left', fontSize: 13, color: greyTextLight}}>
            {props.decription}
          </Text>
          <Text style={{color: greyTextLight}}>
            <Currency quantity={props.price} currency={'GBP'} />
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: props.image}}
            style={{
              height: 80,
              width: 80,
            }}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View
          style={{
            backgroundColor: whiteColor,
            flexDirection: 'row',
            height: 40,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Icon
            name="minus-circle"
            type="material-community"
            size={32}
            disabled={item.length < 1}
            disabledStyle={{backgroundColor: whiteColor}}
            color={item.length > 0 ? greenColor : greybgImage}
            onPress={() => {
              dispatch(removeFromBasket({id: props.id}));
            }}
          />
          <Text style={{marginHorizontal: 10, color: greyTextLight}}>
            {item.length}
          </Text>
          <Icon
            name="plus-circle"
            type="material-community"
            size={32}
            color={greenColor}
            onPress={() => {
              dispatch(
                addToBasket({
                  id: props.id,
                  name: props.name,
                  image: props.image,
                  price: props.price,
                }),
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DishRow;
