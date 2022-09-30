import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  blackText,
  greenColor,
  greyText,
  greyTextLight,
  whiteColor,
  whiteTextColor,
} from '../../../assets/colors';
import Currency from 'react-currency-formatter';
import {useNavigation} from '@react-navigation/native';

const BasketPricing = props => {
  const navigation = useNavigation();
  return (
    <View style={{paddingVertical: 20}}>
      <View style={{backgroundColor: whiteColor, padding: 16}}>
        <View style={styles.text_container}>
          <Text style={styles.textGrey}>Subtotal</Text>
          <Text style={styles.textGrey}>
            <Currency quantity={props.total} currency={'GBP'} />
          </Text>
        </View>

        <View style={styles.text_container}>
          <Text style={styles.textGrey}>Delivery Fee</Text>
          <Text style={styles.textGrey}>
            <Currency quantity={props.total * 0.09} currency={'GBP'} />
          </Text>
        </View>

        <View style={styles.text_container}>
          <Text style={styles.textBlack}>Order Total</Text>
          <Text style={styles.textBlack}>
            <Currency
              quantity={props.total + props.total * 0.09}
              currency={'GBP'}
            />
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: greenColor,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('PreparingOrder')}>
          <Text style={{fontSize: 18, color: whiteTextColor}}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textGrey: {fontSize: 15, color: greyTextLight},
  textBlack: {fontSize: 17, color: blackText, fontWeight: 'bold'},
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default BasketPricing;
