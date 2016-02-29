import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Cropper from 'react-cropper';
import Dropzone from 'react-dropzone';

const ImageResizerModal = React.createClass({
  
  getInitialState() {
    return {
      src: 'http://fengyuanchen.github.io/cropper/img/picture.jpg',
      cropResult: null
    };
  },

  _cropImage() {
    if(typeof this.refs.cropper.getCroppedCanvas() === 'undefined'){
      return;
    }
    this.setState({
      cropResult: this.refs.cropper.getCroppedCanvas().toDataURL()
    });
    
    console.log(this.state.cropResult);
  },
  
  _onChange(e){
    e.preventDefault();
    let files;
    
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    
    let reader = new FileReader();
    
    reader.onload = () => {
      this.setState({src: reader.result});
    };
    
    reader.readAsDataURL(files[0]);
  },
  
  _saveCroppedImage() {
    this.props.person.img = this.refs.cropper.getCroppedCanvas().toDataURL();
    this.props.onHide();
  },
  
  handleSubmit(e) {
    e.preventDefault();
  },
  
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
                <h1>Upload Photo:</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                  <input type="file" onChange={this._onChange} />
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Cropper
                  ref='cropper'
                  src={this.state.src}
                  style={{height: 250, width: '100%'}}
                  aspectRatio={1}
                  guides={false}
                  preview='.img-preview'
                  dragCrop={true}
                  crop={this._crop} />
              </div>
              <div className="col-md-8 img-preview">
                <div>
                  <div className='box' style={{width: '50%', float: 'right'}}>
                    <h1>Preview</h1>
                    <div className="img-preview" style={{width: '100%', float: 'left', height: 300}}/>
                  </div>
                  <div className='box' style={{width: '50%', float: 'right'}}>
                    <img style={{width: '100%'}} src={this.state.cropResult}/>
                  </div>
                </div>
                <br style={{clear: 'both'}}/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this._saveCroppedImage} bsStyle="primary">Save</Button>
          <Button onClick={this.props.onHide} bsStyle="default">Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default ImageResizerModal;
