import {View, StyleSheet, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {GlobalVariables} from '../../Styles/GlobalStyles';
import SectionHeader from '../utility/SectionHeader';
// import {Pressable} from 'native-base';

const categories: any = [
  {
    id: 1,
    name: 'category',
    image:
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 4,
    name: 'category',
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 5,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 6,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 7,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 8,
    name: "Men's category",
    image:
      'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];
export default function CategoryList({}: any) {
  return (
    <View style={styles.body}>
      <SectionHeader title="Categories" />
      <View style={styles.listView}>
        <FlatList
          style={styles.list}
          data={categories}
          renderItem={CategoryItem}
          keyExtractor={(item: any) => item.id}
          horizontal
        />
      </View>
    </View>
  );
}

const CategoryItem = ({item}: any) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        console.log('dsgaasdgsad');
      }}>
      <Image
        style={styles.itemImg}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.itemTextView}>
        <Text style={styles.itemTxt}>{item.name}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  body: {
    width: '100%',
  },
  list: {
    margin: 5,
    // borderWidth: 2,
  },
  listView: {
    width: '100%',
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    fontSize: GlobalVariables.textLg,
    fontWeight: 'bold',
    color: GlobalVariables.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    width: 75,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    marginRight: 10,
  },
  itemImg: {
    height: 90,
    width: '100%',
    borderRadius: 3,
  },
  itemTextView: {
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    position: 'absolute',
    bottom: 0,
    zIndex: 20,
    padding: 3,
    backgroundColor: 'rgba(0, 0, 0, .15)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  itemTxt: {
    fontSize: GlobalVariables.textXs,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
  },
});
