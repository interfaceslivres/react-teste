import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: "#fff",
}
let fakeServerData = {
    user: {
      name: 'Paulo',
      playlists: [
        {
          name: "My favorites",
          songs:
          [
            {name: 'Beat it', duration: 1245},
            {name: 'Caneloni makaroni', duration: 2333},
            {name: 'rosa helikopter', duration: 2222}
          ]
        },
        {
          name: "Descobertas da Semana",
          songs:
          [
            {name: 'teste', duration: 2222},
            {name: 'hallellujah', duration: 2333},
            {name: 'Hej Hej Monika', duration: 2222}
          ]
        },
        {
          name: "Outra Playlist",
          songs:
          [
            {name: 'Beat it', duration: 1245},
            {name: 'Caneloni makaroni', duration: 2333},
            {name: 'rosa helikopter', duration: 4444}
          ]
        },
        {
          name: "playlist maravilha",
          songs:
          [
            {name: 'Beat it', duration: 1245},
            {name: 'Caneloni makaroni', duration: 2333},
            {name: 'rosa helikopter', duration: 2221}
          ]
        }
      ]
    }
};

class PlaylistCounter extends Component {
  render () {
    return (
        <div style={{...defaultStyle, width: "40%", display: 'inline-block'}} className="aggregate">
          <h2>{this.props.playlists.length} playlists</h2>
        </div>
    );
  }
}

  class HoursCounter extends Component {
    render () {
      let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
        return songs.concat(eachPlaylist.songs)
      }, [])
      let totalDuration = allSongs.reduce((sum, eachSong) => {
        return sum + eachSong.duration
      }, 0);
      return (
          <div style={{...defaultStyle, width: "40%", display: 'inline-block'}} className="aggregate">
            <h2>{Math.round(totalDuration/60)} hours</h2>
          </div>
      );
    }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text" onKeyUp={event =>
          this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map( song =>
            <li>{song.name}</li>
          )}
          </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
          <div className="App">
            {this.state.serverData.user ?
              <div>
                <h1 style={{...defaultStyle, "font-size": "54px"}}>
                 {this.state.serverData.user.name}s Playlist
                </h1>
                  <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
                  <HoursCounter playlists={this.state.serverData.user.playlists}/>
                <Filter onTextChange={text => {
                this.setState({filterString: text})
                }
                }/>
               {this.state.serverData.user.playlists.filter(playlist =>
                 playlist.name.toLowerCase().includes(
                   this.state.filterString.toLowerCase())
               ).map(playlist =>
                    <Playlist playlist={playlist} />
                  )}

              </div> : <h1 style={defaultStyle}>Loading...</h1>
            }
          </div>
    );
  }
}




export default App;
