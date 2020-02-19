import React from 'react';
import Bread from './Bread'
import PropTypes from 'prop-types'

function Breadlist(props) {
  console.log(props)
  return (
    <div>

    {props.masterBreadList.map((bread, index) =>
      <Bread
      onAddCount={props.onAddCount}
      onUpvote={props.onUpvote}
      count={bread.count}
      title={bread.title}
      content={bread.content}
      imageURL={bread.imageURL}
      id={bread.id}
      key={bread.id} />
      )}

    </div>
  );
}

Breadlist.propTypes = {
  breadList: PropTypes.array
};

export default Breadlist;
