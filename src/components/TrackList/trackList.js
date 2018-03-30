import React from 'react'
import './trackList.scss'
import Track from '../../components/Track/track'

//You will add a map method that renders a set of Track components inside div el

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track =>
          <Track
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
          /> )}
      </div>
    )
  }
}
export default TrackList

//console.log('TRACKlist: Hello TRACK LIST')