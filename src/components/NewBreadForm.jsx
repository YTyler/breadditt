import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBreadForm(props) {
  let _title = null;
  let _content = null;
  let _imageURL = null;

  function handleNewBreadFormSubmission(event){
    event.preventDefault();
    props.onNewBreadCreation({title: _title.value, content: _content.value, imageURL: _imageURL.value, id: v4(), count: 0});
    _title.value = '';
    _content.value =  '';
    _imageURL.value = '';
  }

  return (
    <div className='breadContainer'>
    <form onSubmit={handleNewBreadFormSubmission}>
    <input type="text" placeholder="Title" ref={(input) => {_title = input}} />
    <input type="text" placeholder="Write Your Post" ref={(input) => {_content = input}} />
    <input type="text" placeholder="Image URL" ref={(input) => {_imageURL = input}} />
    <button type='submit'>Create Post</button>
    </form>
    </div>
  );
}

NewBreadForm.propTypes = {
  onNewBreadCreation: PropTypes.func
};

export default NewBreadForm;
