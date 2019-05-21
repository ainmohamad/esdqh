import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import donate from '../screens/donate';
import donationform from '../screens/donationform';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


const AppStackNavigator = createStackNavigator({
  donate: donate,
  donationform: donationform,
})
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontSize:20, padding: 10}} onPress={() => this.props.navigation.navigate('donationform')}>Make donation</Text>
        <Text style={{fontSize:20, padding:10}} onPress={() => this.props.navigation.navigate('donate')}>View donation</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
