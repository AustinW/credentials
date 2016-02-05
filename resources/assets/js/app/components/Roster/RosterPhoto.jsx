import React from 'react';
import fsp from 'browserify-fs';

import ImageResizerModal from '../Modal/ImageResizerModal.jsx';

var RosterPhoto = React.createClass({
  getInitialState: function() {
    return {
      imageData: '',
      mImageResizerShow: false
    };
  },
  
  componentDidMount: function() {
    this.imageRequest = fsp.readFile('test', 'utf-8', function(err, data) {
      if (data) {
        this.state.imageData = data;
      } else {
        //console.error('Could not retrieve image', err);
      }
    });
  },
  
  getImage: function() {
    
  },
  
  handleClick: function(person) {
     this.setState({ mImageResizerShow: true });
  },
  
  render: function() {
    var imageElement,
        boundClick = this.handleClick.bind(this, this.props.person);
    
    if (this.state.imageData) {
      imageElement = (<img src="data:image/jpg;base64,{this.state.imageData}" onClick={boundClick} />)
    } else {
      imageElement = (<i className="fa fa-user fa-2x" onClick={boundClick}mset></i>);
    }
    
    let mImageResizerClose = () => this.setState({ mImageResizerShow: false });
    
    return (
      <div style={{textAlign: 'center'}}>
        { imageElement }
        <ImageResizerModal person={this.props.person} show={this.state.mImageResizerShow} onHide={mImageResizerClose} />
      </div>
    )
  }
});

export default RosterPhoto;
