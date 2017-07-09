import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    headerTextStyle,
    thumbnailStyle,
    cardHeaderStyle,
    titleStyle,
    imageStyle
    } = styles;

  return (
      <Card>
        <CardSection>
          <View style={cardHeaderStyle}>
            <Image
              source={{ uri: album.thumbnail_image }}
              style={thumbnailStyle}
            />
          </View>

          <View style={headerTextStyle}>
            <Text style={titleStyle}> { album.title } </Text>
            <Text> { album.artist } </Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            source={{ uri: album.image }}
            style={imageStyle}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => Linking.openURL(album.url)}
            buttonText={album.title}
          />
        </CardSection>
      </Card>
  );
};

const styles = {
  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '600'
  },

  cardHeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};

export default AlbumDetail;
