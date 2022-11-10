import {View, Button, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {products} from '../utility/data/products';
import SectionHeader from '../utility/SectionHeader';

type Props = {};

export default function ProductCard({product}: any) {
  console.log(product.images[0].url);
  return (
    <Pressable style={styles.card}>
      <Image
        source={{
          uri: product.images[0].url,
        }}
        style={{
          height: 200,
          width: 180,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {},
  productsView: {},
});
