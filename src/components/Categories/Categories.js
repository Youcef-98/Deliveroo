import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

const categoriesData = [
  {
    id: 1,
    title: 'Offers',
    imageUrl:
      'https://media.istockphoto.com/vectors/off-banner-vector-id1262306143?k=20&m=1262306143&s=612x612&w=0&h=sS2uqAGmcOxKc1E5vQiP9Sr8t6aH0Ooty2YAbegN9ok=',
  },
  {
    id: 2,
    title: 'Pizza',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/pizza-mixte-aux-olives-poivrons-tomates_140725-183.jpg?w=2000',
  },
  {
    id: 3,
    title: 'Thai',
    imageUrl:
      'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F78e153d9-3a95-481a-b316-fec4c1fd5608.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgRmFicmljZSBWZWlnYXMgLyBGZW1tZSBBY3R1ZWxsZQ%3D%3D/pad-thai-vegetarien.jpeg',
  },
  {
    id: 4,
    title: 'Sushi',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0353/5621/files/Dragon_Rolls_1024x1024.jpg?v=1627460696',
  },
  {
    id: 5,
    title: 'Asian',
    imageUrl:
      'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620067036/Southeast-Asian-Food-Cambodian-Amok/Southeast-Asian-Food-Cambodian-Amok.jpg',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 10,
        height: 100,
        flex: 1,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categoriesData}
        renderItem={category => {
          return (
            <CategoryCard
              imageUrl={category.item.imageUrl}
              title={category.item.title}
            />
          );
        }}
        key={category => category.index}
      />
    </View>
  );
};

export default Categories;
