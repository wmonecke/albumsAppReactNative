import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        console.log(response);
        this.setState({ albums: response.data });
    });
  }


  renderAlbums() {
    if (this.state.albums.length === 0) {
      return <Text> Loading ... </Text>;
    }

    return this.state.albums.map(album => {
      return (
        <AlbumDetail
          key={album.title}
          album={album}
        />
      );
    });
  }


  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }

}

export default AlbumList;
