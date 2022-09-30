import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

import {
  blackText,
  greenColor,
  greenRestaurantsStars,
  greyText,
  greyTextLight,
  whiteColor,
} from '../../../assets/colors';

const FeatureItem = (data, navigation) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: whiteColor,
        paddingBottom: 10,
      }}
      onPress={() => {
        navigation.navigate('Restaurant', {data: data});
      }}>
      <Image source={{uri: data.image}} style={{height: 150, width: 300}} />
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            color: blackText,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {data.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Icon
            name="star"
            type="antdesign"
            size={20}
            color={greenRestaurantsStars}
          />
          <Text
            style={{
              paddingHorizontal: 5,
              color: greyText,
            }}>
            {data.rate}
          </Text>
          <Text style={{color: greyText}}>·</Text>
          <Text
            style={{
              paddingHorizontal: 5,
              color: greyText,
            }}>
            {data.category}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="location"
            type="octicon"
            size={23}
            color={greyTextLight}
          />
          <Text
            style={{
              paddingHorizontal: 5,
              color: greyText,
            }}>
            {data.near}
          </Text>
          <Text style={{color: greyTextLight}}>·</Text>
          <Text
            style={{
              paddingHorizontal: 5,
              color: greyText,
            }}>
            {data.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureItem;
