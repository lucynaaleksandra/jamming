import React from 'react'
import './track.scss'

//<h3>  track name will go here  </h3>
//<p>  track artist will go here  |  track album will go here  </p>
//<a class="Track-action">   + or - will go here   </a>

class Track extends React.Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }
  
  // Adds this.props.track as an argument to the addTrack method in app.js
  addTrack() {
    this.props.onAdd(this.props.track)
  }

  // Remove this.props.track from the playlist
  onRemove() {
    this.props.onRemove(this.props.track)
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>+</a>
        <a className="Track-action" onClick={this.removeTrack}>-</a>
      </div>
    )
  }
}
export default Track

//console.log('TRACK: Hello TRACK')