import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  blackText,
  greenColor,
  greyText,
  greyTextLight,
  whiteColor,
  whiteTextColor,
} from '../../../assets/colors';
import * as Progrees from 'react-native-progress';

const DeliveryTimeCard = props => {
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          backgroundColor: whiteColor,
          padding: 15,
          borderRadius: 10,
          elevation: 3,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: greyTextLight}}>
              Estimated Arrival
            </Text>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: blackText}}>
              45-55 Minutes
            </Text>
          </View>
          <View>
            <Image
              source={{uri: 'https://links.papareact.com/fls'}}
              style={{height: 80, width: 80}}
            />
          </View>
        </View>
        <Progrees.Bar size={30} color={greenColor} indeterminate={true} />
        <Text style={{color: greyText, fontSize: 15, paddingVertical: 10}}>
          Your order at Nando's is being prepared
        </Text>
      </View>
    </View>
  );
};

export default DeliveryTimeCard;
