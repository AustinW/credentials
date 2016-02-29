import React from 'react';
import fsp from 'browserify-fs';

import ImageResizerModal from '../Modal/ImageResizerModal.jsx';

var RosterPhoto = React.createClass({
  getInitialState() {
    return {
      imageData: '',
      mImageResizerShow: false
    };
  },
  
  componentDidMount() {
    this.imageRequest = fsp.readFile('test', 'utf-8', function(err, data) {
      if (data) {
        this.state.imageData = data;
      } else {
        //console.error('Could not retrieve image', err);
      }
    });
  },
  
  mImageResizerClose() {
    this.forceUpdate();
    this.setState({mImageResizerShow: false});
  },
  
  getImage() {
    
  },
  
  handleClick(person) {
     this.setState({ mImageResizerShow: true });
  },
  
  render() {
    var imageElement,
        boundClick = this.handleClick.bind(this, this.props.person);
    
    if (this.props.person.img) {
      imageElement = (<img src={this.props.person.img} onClick={boundClick} style={{width:32, height:32}} />)
    } else {
      imageElement = (<i className="fa fa-user fa-2x" onClick={boundClick}></i>);
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
