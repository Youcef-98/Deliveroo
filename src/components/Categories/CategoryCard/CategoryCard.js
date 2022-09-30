import {Image, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {whiteTextColor} from '../../../../assets/colors';

const CategoryCard = props => {
  return (
    <TouchableOpacity style={{marginHorizontal: 5}}>
      <Image
        source={{uri: props.imageUrl}}
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 1,
          left: 5,
          color: whiteTextColor,
          fontSize: 15,
          fontFamily: 'Rubik-SemiBold',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
