// Index.ios.js - Place code in here for iOS.

// Import a library to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component.
const App = () => {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
};

const styles = {
  viewStyle: {
    height: '100%'

  }
};
// Render the created component to the mobile device.
AppRegistry.registerComponent('albums', () => App);
