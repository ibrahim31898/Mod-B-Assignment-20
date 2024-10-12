import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Cards from './Cards'; // Ensure you import Cards component

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cards />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
