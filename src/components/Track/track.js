import React from 'react'
import './track.scss'

//<h3>  track name will go here  </h3>
//<p>  track artist will go here  |  track album will go here  </p>
//<a class="Track-action">   + or - will go here   </a>

class Track extends React.Component {

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
      </div>
    )
  }
}
export default Track