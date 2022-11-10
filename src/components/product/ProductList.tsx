import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {products, Pressable} from '../utility/data/products';
import SectionHeader from '../utility/SectionHeader';
import ProductCard from './ProductCard';

type Props = {};

export default function ProductList({}: Props) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Products" />
      <View style={styles.productsView}>
        {products.length > 0
          ? products.map((product: any) => <ProductCard product={product} />)
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  productsView: {},
});
