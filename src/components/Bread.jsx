import React from 'react';
import PropTypes from 'prop-types';

function Bread(props) {

  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={props.onUpvote}>test</button>
    </div>
  );
}

Bread.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageURL: PropTypes.string,
}


export default Bread;




// <img src=`${props.imageURL}`></img>
