import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {greenColor, whiteColor, whiteTextColor} from '../../../assets/colors';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DeliveryTimeCard from '../../components/DeliveryTimeCard/DeliveryTimeCard';
import selectRestaurant from '../../Redux/Reducers/restaurantSlice';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import DeliveryFooter from '../../components/DeliveryFooter/DeliveryFooter';
import {NavigationActions, StackActions} from 'react-navigation';
const Delivery = () => {
  const navigation = useNavigation();
  //const restaurant = useSelector(selectRestaurant);
  //const restaurant = useSelector(selectRestaurant);
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
        style={{flex: 1, marginTop: -50}}
      />
      <Marker
        key={1}
        coordinate={{
          latitude: 36.80191318456871,
          longitude: 3.0461646468869312,
        }}
        title={'hello'}
        description={'hehehehehehehe hbcjahdjhdf dabdhadgb'}
        identifier="origin"
        pinColor={greenColor}
      />

      <DeliveryFooter />
    </View>
  );
};

export default Delivery;
