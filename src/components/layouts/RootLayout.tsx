import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import {GlobalVariables} from '../../Styles/GlobalStyles';
// @ts-ignore
import AntDesignIcons from 'react-native-vector-icons/dist/AntDesign';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Badge from '../utility/badge/Badge'

export default function RootLayout({children, navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={GlobalVariables.base100}
      />
      <View style={styles.navView}>
        <View style={styles.navTop}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 2,
            }}>
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
                color={GlobalVariables.primary}
                name="left"
              />
            </Pressable>
            <View style={styles.navSearch}>
              <TextInput
                placeholder="Search"
                style={styles.navtextField}
                placeholderTextColor={GlobalVariables.baseTextLight}
              />
              <Pressable
                style={({pressed}) => [
                  styles.navItems,
                  styles.headerButton,
                  {
                    backgroundColor: pressed
                      ? GlobalVariables.base100
                      : GlobalVariables.base300,
                  },
                ]}
                onPress={() => {
                  navigation.navigate('Search');
                }}>
                <AntDesignIcons
                  size={16}
                  color={GlobalVariables.baseTextLight}
                  name="search1"
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 2,
            }}
          />
          <Badge
            action={() => {
              navigation.goBack();
            }}
            value={10}>
            <MaterialCommunityIcons
              size={28}
              color={GlobalVariables.primary}
              name="cart"
            />
          </Badge>
          <Badge
            action={() => {
              navigation.goBack();
            }}
            value={10}>
            <MaterialCommunityIcons
              size={28}
              color={GlobalVariables.primary}
              name="home"
            />
          </Badge>
        </View>
      </View>
      <ScrollView>{children}</ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    shadowColor: GlobalVariables.base300,
    borderBottomColor: GlobalVariables.base300,
    borderBottomWidth: 1,
  },
  navTop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navItems: {},
  navBottom: {},
  navSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GlobalVariables.base300,
    backgroundColor: GlobalVariables.base300,
    // padding: 2,
    width: 210,
    borderRadius: 5,
    fontSize: GlobalVariables.textXs,
  },
  navtextField: {
    flex: 1,
    height: 23,
    padding: 0,
    paddingLeft: 5,
    color: GlobalVariables.baseTextLight,
  },
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
