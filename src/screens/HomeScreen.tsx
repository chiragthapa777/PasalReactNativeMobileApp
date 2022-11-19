import React from 'react';
import {StyleSheet} from 'react-native';
import CategoryList from '../components/category/CategoryList';
import HomeLayout from '../components/layouts/HomeLayout';
import ProductList from '../components/product/ProductList';
{
  /* <View style={styles.heroView}>
        <Image
          style={styles.heroImage}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg',
          }}
        />
      </View> */
}

export default function HomeScreen({navigation}: any) {
  return (
    <HomeLayout navigation={navigation}>
      <CategoryList />
      <ProductList navigation={navigation} />
    </HomeLayout>
  );
}

const styles = StyleSheet.create({
  heroView: {
    width: '100%',
    height: 200,
    display: 'flex',
    justifyContent: 'space-between',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
});
