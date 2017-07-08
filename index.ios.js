// Index.ios.js - Place code in here for iOS.

// Import a library to help create a component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component.
const App = () => (
  <Text> Hello World! </Text>
);

// Render the created component to the mobile device.
AppRegistry.registerComponent('albums', () => App);
