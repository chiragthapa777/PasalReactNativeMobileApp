import {View, Button, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';

import {GlobalVariables} from '../../Styles/GlobalStyles';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function ProductCard({navigation, product}: any) {
  const handleCardClick = () => {
    navigation.navigate('ProductDetail');
  };
  return (
    <Pressable style={styles.card} onPress={handleCardClick}>
      <Image
        source={{
          uri: product.images[0].url,
        }}
        style={styles.cardImg}
        resizeMode="cover"
      />
      <View style={styles.cardBottomVew}>
        <View style={styles.leftView}>
          <Text
            style={[
              styles.cardText,
              {
                width: '100%',
                textAlign: 'center',
                color: GlobalVariables.primary,
                fontSize: GlobalVariables.textXl,
              },
            ]}>
            ₹ {product.price}
          </Text>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed
                  ? GlobalVariables.primaryLight
                  : GlobalVariables.primary,
              },
              styles.cartBtn,
            ]}>
            <MaterialCommunityIcons
              size={18}
              color={GlobalVariables.base100}
              name={'cart-arrow-down'}
            />
          </Pressable>
        </View>
        <View style={styles.rightView}>
          <Text
            style={[
              styles.cardText,
              {color: GlobalVariables.baseTextLight, textAlign: 'center'},
            ]}>
            {product.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: GlobalVariables.base100,
    margin: 3,
    borderRadius: 10,
    elevation: 1,
  },
  productsView: {},
  cardImg: {
    height: 230,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardText: {
    color: GlobalVariables.baseText,
    fontWeight: 'bold',
    fontSize: GlobalVariables.textLg,
    flex: 1,
    flexWrap: 'wrap',
  },
  cardBottomVew: {
    width: '100%',
    display: 'flex',
    padding: 5,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  leftView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  rightView: {
    alignItems: 'center',
  },
  cartBtn: {
    padding: 10,
    borderRadius: 50,
    elevation: 15,
    shadowColor: GlobalVariables.primary,
  },
});
