import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Pressable} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import AntDesignIcons from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function Layout({children, navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navView}>
        <Pressable
          style={({pressed}) => [
            styles.navItems,
            styles.headerButton,
            {
              backgroundColor: pressed
                ? GlobalVariables.base200
                : GlobalVariables.base100,
            },
          ]}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesignIcons
            size={20}
            color={GlobalVariables.baseText}
            name="left"
          />
        </Pressable>
        <View style={[styles.navItems, styles.logoView]}>
          <MaterialCommunityIcons
            name="store"
            color={GlobalVariables.primary}
            size={26}
          />
          <Text style={styles.headerText}>Pasal</Text>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.navItems,
            styles.headerButton,
            {
              backgroundColor: pressed
                ? GlobalVariables.base200
                : GlobalVariables.base100,
            },
          ]}
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
    paddingVertical: 8,
    shadowColor: GlobalVariables.base300,
    borderBottomColor: GlobalVariables.base300,
    borderBottomWidth: 1,
  },
  navItems: {},
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalVariables.primary,
    marginLeft: 5,
  },
  headerButton: {
    borderRadius: 50,
    padding: 5,
  },
  logoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
