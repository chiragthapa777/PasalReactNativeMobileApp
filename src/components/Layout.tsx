import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Pressable} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import AntDesignIcons from 'react-native-vector-icons/dist/AntDesign';

export default function Layout({children, navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navView}>
        <Pressable
          style={styles.navItems}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesignIcons
            size={20}
            color={GlobalVariables.baseText}
            name="left"
          />
        </Pressable>
        <View style={styles.navItems}>
          <Text style={styles.headerText}>Pasal</Text>
        </View>
        <Pressable
          style={styles.navItems}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <AntDesignIcons
            size={20}
            color={GlobalVariables.baseText}
            name="search1"
          />
        </Pressable>
      </View>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalVariables.base200,
  },
  navView: {
    backgroundColor: GlobalVariables.base100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: GlobalVariables.base300,
  },
  navItems: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalVariables.primary,
  },
});
