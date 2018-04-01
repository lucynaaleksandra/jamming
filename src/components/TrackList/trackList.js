import React from 'react'
import PropTypes from 'prop-types'
import './trackList.scss'
import Track from '../../components/Track/track'

const background = '#010c3f';
const fontSize = '1em';
const color = 'white';

const styles = {
  background: background,
  fontSize: fontSize,
  color: color
}

//You will add a map method that renders a set of Track components inside div el
class TrackList extends React.Component {

  static propTypes = {
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
  }

  createTracks() {
    return this.props.tracks.map(track => {
      return (
        <div key={track.id}>
          <Track
            onClickAdd={this.props.onClickAdd}
            track={track}
          />
          {this.props.onAdd
            && <button style={styles}
              onClick={event => this.props.onAdd(track)}>+</button>}
          {this.props.onRemove
            && <button
              style={styles}
              onClick={event => this.props.onRemove(track)}>-</button>}
        </div>
      )
    })
  }

  render() {
    let tracks = this.createTracks()

    return (
      <div className="TrackList">
        {tracks}
      </div>
    )
  }
}
export default TrackList