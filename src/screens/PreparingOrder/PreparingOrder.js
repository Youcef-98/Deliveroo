import {ActivityIndicator, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {greenColor, whiteColor, whiteTextColor} from '../../../assets/colors';
import * as Animatble from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const PreparingOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: greenColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatble.Image
        source={require('../../../assets/images/preparingOrderGIF.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{width: 300, height: 300}}
      />

      <Animatble.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          fontSize: 15,
          color: whiteTextColor,
          textAlign: 'center',
          fontWeight: 'bold',
          marginVertical: 50,
        }}>
        Waitting for Restaurant to accept your order
      </Animatble.Text>
      <Progress.Circle size={60} indeterminate={true} color={whiteColor} />
    </SafeAreaView>
  );
};

export default PreparingOrder;
