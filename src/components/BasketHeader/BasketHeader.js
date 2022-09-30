import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  blackText,
  greenColor,
  greyText,
  whiteColor,
} from '../../../assets/colors';

import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const BasketHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: whiteColor, padding: 16}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: blackText, fontWeight: 'bold', fontSize: 18}}>
          Basket
        </Text>
        <Text style={{color: greyText, fontWeight: 'normal', fontSize: 15}}>
          {props.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: greenColor,
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40 / 2,
          position: 'absolute',
          right: 25,
          top: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Icon name="x" type="foundation" color={whiteColor} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BasketHeader;
