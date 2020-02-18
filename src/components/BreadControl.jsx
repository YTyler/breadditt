import React from 'react';
import NewBreadForm from './NewBreadForm';
import Breadlist from './Breadlist';
import PropTypes from 'prop-types';

class BreadControl extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
      <Breadlist onUpvote={this.onUpvote} count={this.props.masterBreadList.count} masterBreadList={this.props.masterBreadList} />
      <NewBreadForm onNewBreadCreation={this.props.onNewBreadCreation}/>
      </div>
    );
  }
}
BreadControl.propTypes = {
  onNewBreadCreation: PropTypes.func
};

export default BreadControl
