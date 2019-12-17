import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AppNew extends Component {
  
  static propTypes = {
    details: PropTypes.object
  };

  render(){
    const data = this.props.location.state.details
    return(
      <div>
        {data &&
           <div>
            <ul>
           
              <li>{data.symbol}</li>
              <li>{data.title}</li>
              <li>{data.keywords}</li>
            </ul>
           </div>
        }
       </div>
    )

  }
}
