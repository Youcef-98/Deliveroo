import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  blackText,
  greenColor,
  greybgImage,
  whiteColor,
} from '../../../assets/colors';

const BasketDeliveryTime = () => {
  return (
    <View style={{marginVertical: 25}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: whiteColor,
          padding: 15,
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
          }}
          style={{
            height: 42,
            width: 40,
            borderRadius: 50 / 2,
            backgroundColor: greybgImage,
          }}
        />
        <Text style={{flex: 1, marginLeft: 10, color: blackText}}>
          Deliver in 50-75 min
        </Text>
        <Text style={{color: greenColor}}>Change</Text>
      </View>
    </View>
  );
};

export default BasketDeliveryTime;
