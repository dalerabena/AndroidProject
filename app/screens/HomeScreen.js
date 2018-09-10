import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Users"
          onPress={() => this.props.navigation.navigate('Users')}
        />
      </View>
    );
  }
}

export default HomeScreen;
