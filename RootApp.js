import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home/Home';
import Restaurant from './src/screens/Restaurant/Restaurant';
import Basket from './src/screens/Basket/Basket';
import PreparingOrder from './src/screens/PreparingOrder/PreparingOrder';
import Delivery from './src/screens/Delivery/Delivery';

const RootApp = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, orientation: 'portrait'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen
          name="Basket"
          component={Basket}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen
          name="PreparingOrder"
          component={PreparingOrder}
          options={{presentation: 'fullScreenModal'}}
        />
        <Stack.Screen
          name="Delivery"
          component={Delivery}
          options={{presentation: 'fullScreenModal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
