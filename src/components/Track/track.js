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
          <h3></h3>
          <p></p>
        </div>
        <a className="Track-action"></a>
      </div>
    )
  }
}
export default Track

//console.log('TRACK: Hello TRACK')