import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {greenColor, whiteColor, whiteTextColor} from '../../../assets/colors';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DeliveryTimeCard from '../../components/DeliveryTimeCard/DeliveryTimeCard';
import selectRestaurant from '../../Redux/Reducers/restaurantSlice';
import MapView, {Marker} from 'react-native-maps';
import DeliveryFooter from '../../components/DeliveryFooter/DeliveryFooter';

const cord = [
  {
    latitude: 36.80191318456871,
    longitude: 3.0461646468869312,
  },
];
const rider_number = '+213000000000';
const Delivery = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: greenColor}}>
      <SafeAreaView style={{zIndex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Icon
            name="close"
            type="antdesign"
            color={whiteColor}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
          <Text style={{fontSize: 18, color: whiteTextColor}}>Order Help</Text>
        </View>
        <DeliveryTimeCard />
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 36.80191318456871,
          longitude: 3.0461646468869312,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{flex: 1, marginTop: -50}}>
        {cord.map(marker => (
          <Marker
            key={1}
            coordinate={marker}
            title={'marker.title'}
            description={'marker.description'}
            identifier="origin"
            pinColor={greenColor}
          />
        ))}
      </MapView>

      <DeliveryFooter number={rider_number} />
    </View>
  );
};

export default Delivery;
