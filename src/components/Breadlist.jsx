import React from 'react';
import Bread from './Bread'
import PropTypes from 'prop-types'

function Breadlist(props) {
  console.log(props)
  return (
    <div>

    {props.masterBreadList.map((bread, index) =>
      <Bread onUpvote={props.onUpvote} count={props.count}
      title={bread.title}
      content={bread.content}
      imageURL={bread.imageURL}
      key={bread.id} />
      )}

    </div>
  );
}

Breadlist.propTypes = {
  breadList: PropTypes.array
};

export default Breadlist;
