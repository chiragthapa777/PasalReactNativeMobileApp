import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Layout from '../components/Layout';


export default function HomeScreen({navigation}: any) {
  return (
    <Layout navigation={navigation}>
      <View>
        <Text>home</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
