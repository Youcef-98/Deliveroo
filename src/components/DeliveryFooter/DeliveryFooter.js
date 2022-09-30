import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {
  blackText,
  greenColor,
  greybgImage,
  greyTextLight,
  whiteColor,
} from '../../../assets/colors';

const DeliveryFooter = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: whiteColor,
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
        }}
        style={{
          height: 42,
          width: 40,
          padding: 5,
          borderRadius: 50 / 2,
          backgroundColor: greybgImage,
        }}
      />
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text style={{fontSize: 16, color: blackText}}>Sonny Sangha</Text>
        <Text style={{fontSize: 14, color: greyTextLight}}>{props.number}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${props.number}`)}>
        <Text style={{fontSize: 15, color: greenColor, fontWeight: 'bold'}}>
          Call
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeliveryFooter;
