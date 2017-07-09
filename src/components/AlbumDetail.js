import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = ({ album }) => {
  return (
    <View>
      <Text> Title: { album.title } </Text>
      <Text> Artist: { album.artist } </Text>
    </View>
  );
};

export default AlbumDetail;
