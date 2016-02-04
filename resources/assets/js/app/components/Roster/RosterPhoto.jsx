import React from 'react';
import Dropzone from 'react-dropzone-es6';

var RosterPhoto = React.createClass({
  onDrop: (files) => {
    console.log('Received files: ', files);
  },
  
  render: function() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
});

export default RosterPhoto;
