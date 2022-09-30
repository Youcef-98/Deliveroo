import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {greenColor, whiteColor, whiteTextColor} from '../../../assets/colors';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DeliveryTimeCard from '../../components/DeliveryTimeCard/DeliveryTimeCard';
import selectRestaurant from '../../Redux/Reducers/restaurantSlice';
import MapView from 'react-native-maps';
const Delivery = () => {
  const navigation = useNavigation();
  //const restaurant = useSelector(selectRestaurant);
  return (
    <View style={{flex: 1, backgroundColor: greenColor}}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Icon name="close" type="antdesign" color={whiteColor} />
          <Text style={{fontSize: 18, color: whiteTextColor}}>Order Help</Text>
        </View>
        <DeliveryTimeCard />
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 36.74443325022872,
          longitude: 3.0621307851058384,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{elevation: 0, flex: 1, marginTop: -30}}
      />

      <SafeAreaView style={{}}>
        <Text>hello</Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
