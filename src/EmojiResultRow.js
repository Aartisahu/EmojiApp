import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";
import history from './history';
export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    keywords: PropTypes.string
  };

  handleClick = (details) => {
    console.log(details)
    history.push({
      pathname:'/appnew',
      state: details
    })
  }

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <button  onClick={ () => this.handleClick(this.props)} >route</button>
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
        
      </div>
    );
  }
}
