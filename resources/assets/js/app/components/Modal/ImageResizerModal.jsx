import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Cropper from 'react-cropper';

const ImageResizerModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            {this.props.person.firstName} {this.props.person.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Upload photo:</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Cropper
                  ref='cropper'
                  src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
                  style={{height: 400, width: '100%'}}
                  aspectRatio={16 / 9}
                  guides={false}
                  crop={this._crop} />
              </div>
            </div>
          </div>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default ImageResizerModal;
