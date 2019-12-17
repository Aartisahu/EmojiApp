import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AppNew extends Component {
  
  static propTypes = {
    detail: PropTypes.object
  };

  render(){
    console.log(this.props);
    return(
      <div>
        helloooooo
        {this.props.keywords}
       </div>
    )

  }
}
