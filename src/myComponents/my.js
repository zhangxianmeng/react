require('normalize.css/normalize.css');
require('styles/App.css');
//require('styles/main.less');
import React from 'react';
//my components
export default class Mengge extends React.Component {
  render() {
    return(
      <p style={{color:'bule',fontSize:'36px'}}>this is text component {this.props.say}</p>
    )

  }
}




Mengge.defaultProps = {
  say:'hello world are you ok'
};




export default Mengge;
