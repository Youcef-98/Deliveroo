import React from 'react';

import {View, Text, Image, TextInput} from 'react-native';

import {
  blackText,
  greenColor,
  greybgImage,
  greybgTextInput,
  greyTextLight,
  whiteColor,
} from '../../../assets/colors';
import {Icon} from 'react-native-elements';

const Header = () => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: whiteColor,
      }}>
      <View style={{flexDirection: 'row'}}>
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

        <View style={{paddingHorizontal: 10, flex: 1}}>
          <Text style={{color: greyTextLight, fontWeight: 'bold'}}>
            Deliver Now!
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: blackText,
              fontSize: 20,
            }}>
            Current Location
            <Icon
              name="chevron-down"
              type="entypo"
              size={20}
              color={greenColor}
              onPress={() => console.log('hello')}
            />
          </Text>
        </View>
        <Icon
          name="user"
          type="antdesign"
          size={40}
          color={greenColor}
          onPress={() => {
            console.log('hello');
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 5,
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: greybgTextInput,
          }}>
          <Icon
            name="search1"
            type="antdesign"
            size={20}
            color={greyTextLight}
            style={{padding: 10}}
            onPress={() => {
              console.log('hello');
            }}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            placeholderTextColor={greyTextLight}
            style={{
              color: greyTextLight,
              fontSize: 16,
            }}
          />
        </View>

        <Icon
          name="tune-vertical"
          type="material-community"
          size={25}
          color={greenColor}
          onPress={() => {
            console.error('heloo');
          }}
        />
      </View>
    </View>
  );
};

export default Header;
