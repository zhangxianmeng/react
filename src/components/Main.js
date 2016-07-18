require('normalize.css/normalize.css');
require('styles/App.css');
//require('styles/main.less');
import React from 'react';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {opacity:1};
    this.handleClick = function(){

      this.setState({opacity:.1})
      alert(this.state.opacity)

    }.bind(this)
  }
  render() {
    return (
      <section className="stage" onClick={this.handleClick}>
        <section className="img-sec">hello mengge {this.props.say}</section>
        <nav className="controller-nav">mengge is so diao</nav>
      </section>
    );
  }
}
//my components
export default class Mengge extends React.Component {
  render() {
    return(
      <p style={{color:'bule',fontSize:'36px'}}>this is text component</p>
    )

  }

}


AppComponent.defaultProps = {
  say:'hello world are you ok'
};
//export default暴露给外边
export default AppComponent;
