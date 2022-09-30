import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {
  blackText,
  greenColor,
  greyText,
  greyTextLight,
} from '../../../assets/colors';
import FeatureItem from '../FeatureItem/FeatureItem';

const FeatureRow = props => {
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: blackText, fontWeight: 'bold', fontSize: 20}}>
          {props.title}
        </Text>
        <Icon
          name="arrowright"
          type="antdesign"
          size={30}
          color={greenColor}
          onPress={() => {
            console.log('hello');
          }}
        />
      </View>
      <Text style={{color: greyText, marginBottom: 10}}>
        {props.description}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        horizontal
        data={props.restaurants}
        renderItem={({item}) => {
          return FeatureItem(item, props.navigation);
        }}
        key={item => item.id}
      />
    </View>
  );
};

export default FeatureRow;
