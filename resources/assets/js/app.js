var React = require('react');
var ReactDOM = require('react-dom');

var Dropzone = require('react-dropzone-es6');

function inchesToPixels(inches) {
  return inches * 300; // 300 DPI
}

var CREDENTIALS = {
  dimensions: {
    width: 0,
    height: 0
  },
  roster: [
    {name: "Austin White", role: "Coach", img: null, team: "World Elite"},
    {name: "Logan Dooley", role: "Athlete", img: null, team: "World Elite"}
  ],
  eventInfo: {
    title: "",
    location: "",
    date: "",
    logo: null
  },
  zones: {
    available: []
  },
  
  background: {
    color: '#fff',
    img: null
  },
  
  positioning: {
    roster: {},
    eventInfo: {
      title: { x: 0, y: 0 },
      location: { x: 0, y: 0 },
      date: { x: 0, y: 0 },
      logo: { x: 0, y: 0 }
    },
    zones: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0} // ....
    ]
  }
}

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

var Roster = React.createClass({
  
  
  render: function() {
    return (
      <div>
        <div>People: { CREDENTIALS.roster.length }</div>
        <RosterPhoto />
      </div>
    )
  }
});


ReactDOM.render(<Roster />, document.getElementById('credentials-app-roster'));
