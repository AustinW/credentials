import React from 'react';

import AVAILABLE_DIMENSIONS from '../../../config.js';
import inchesToPixels from '../../../helpers';

var DimensionChooser = React.createClass({
  changeDimension: function(dimension) {
    console.log('DIMENSION: ', dimension);
    
    CREDENTIALS.dimensions.width = inchesToPixels(dimension.width);
    CREDENTIALS.dimensions.height = inchesToPixels(dimension.height);
    CREDENTIALS.dimensions.ref = dimension;
    
    console.log('CREDENTIALS: ', CREDENTIALS);
  },
  
  render: function() {
    
    var choices = [];
    
    AVAILABLE_DIMENSIONS.forEach((dim) => {
      var clickHandler = this.changeDimension;
      choices.push(
        <li key={dim.key}>
          <div className="thumbnail">
            <img src={dim.previewSrc} />
            <div className="caption">
              <h3>{dim.size}</h3>
              <p>{dim.paperSize}</p>
              <p><button className="btn btn-primary" onClick={() => {this.changeDimension(dim)}}>Choose</button></p>
            </div>
          </div>
        </li>
      );
    });
    
    return (
      <div>
        <ul className="list-inline">
          { choices }
        </ul>
      </div>
    )
  }
});

export default DimensionChooser;
