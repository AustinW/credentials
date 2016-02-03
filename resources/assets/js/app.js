import React from 'react';
import ReactDOM from 'react-dom';
import AvatarEditor from 'react-avatar-editor';
import {Table, Column, Cell} from 'fixed-data-table';
import Modal from 'react-bootstrap/lib/Modal';

var Dropzone = require('react-dropzone-es6');

function inchesToPixels(inches) {
  return inches * 300; // 300 DPI
}

const DateCell = (rowIndex, data, col, ...props) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col].toLocaleString()}
  </Cell>
);

const ImageCell = (rowIndex, data, col, ...props) => (
  <ExampleImage
    src={data.getObjectAt(rowIndex)[col]}
  />
);

const LinkCell = (rowIndex, data, col, ...props) => (
  <Cell {...props}>
    <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
  </Cell>
);

class TextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

var CREDENTIALS = {
  dimensions: {
    width: 0,
    height: 0,
    ref: null
  },
  roster: [
    {firstName: "Austin", lastName: "White", role: "Coach", img: null, team: "World Elite"},
    {firstName: "Logan", lastName: "Dooley", role: "Athlete", img: null, team: "World Elite"}
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

var AVAILABLE_DIMENSIONS = [
  {
    key: '2x2',
    previewSrc: 'https://www.perforatedpaper.com/images/products/thumbs/301_sml-01.png',
    size: '2 cols x 2 rows',
    paperSize: '8.5" x 11"',
    width: 4.25,
    height: 5.5
  },
  {
    key: '2x3',
    previewSrc: 'https://www.perforatedpaper.com/images/products/thumbs/303_sml-01.png',
    size: '2 cols x 3 rows',
    paperSize: '8.5" x 11"',
    width: 4.25,
    height: 3.67
  }
];

const MyLargeModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

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
  
  getInitialState: function() {
    return {
      roster: CREDENTIALS.roster,
    };
  },
  
  onClickSave: function() {
    console.log('IMAGE: ', this.refs.editor.getImage());
  },
  
  render: function() {
    // var {roster} = 
    return (
      <div>
        <Table
          rowHeight={60}
          rowsCount={this.state.roster.length}
          headerHeight={50}
          width={700}
          height={500}>
          <Column
            header={<Cell>Photo</Cell>}
            cell={
              <Cell>
                <AvatarEditor
                  image="http://placehold.it/50x50"
                  width={50}
                  height={50}
                  border={0}
                  color={[255,255,255,0.6]}
                  scale={1.2} />
              </Cell>
            }
            width={60}
          />
          <Column
            header={<Cell>First Name</Cell>}
            cell={
              <TextCell data={this.state.roster} field="firstName" />
            }
            width={150}
          />
          <Column
            header={<Cell>Last Name</Cell>}
            cell={
              <TextCell data={this.state.roster} field="lastName" />
            }
            width={150}
          />
          <Column
            header={<Cell>Role</Cell>}
            cell={
              <TextCell data={this.state.roster} field="role" />
            }
            width={150}
          />
          <Column
            header={<Cell>Team</Cell>}
            cell={
              <TextCell data={this.state.roster} field="team" />
            }
            width={150}
          />
        </Table>
        <RosterPhoto />
      </div>
    )
  }
});


ReactDOM.render(<Roster />, document.getElementById('credentials-app-roster'));
ReactDOM.render(<DimensionChooser />, document.getElementById('dimension-chooser'));
