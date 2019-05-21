import React from 'react';
import { View, ScrollView, Picker, StyleSheet, Text } from 'react-native';

export default class donationform extends React.Component {
  static navigationOptions = {
    title: 'Donation form',
  };
  state = {
      
  }

  render() {
    return (
      <View>
        <Text>Type of donation</Text>
        <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({language: itemValue})
        }>
        <Picker.Item label="Clothes" value="cloth" />
        <Picker.Item label="Book" value="book" />
        <Picker.Item label="Others" value="others" />

        </Picker>
      </View>
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
