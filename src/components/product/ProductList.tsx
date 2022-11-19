import {View, StyleSheet} from 'react-native';
import React from 'react';
import {products} from '../utility/data/products';
import SectionHeader from '../utility/SectionHeader';
import ProductCard from './ProductCard';


export default function ProductList({navigation}: any) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Products" />
      <View style={styles.productsView}>
        {products.length > 0
          ? products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
                navigation={navigation}
              />
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  productsView: {
    margin: 3,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
