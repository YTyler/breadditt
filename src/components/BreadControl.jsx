import React from 'react';
import NewBreadForm from './NewBreadForm';
import Breadlist from './Breadlist';
import PropTypes from 'prop-types';

class BreadControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
    this.onUpvote = this.onUpvote.bind(this);
  }

  onUpvote(){
    this.setState({count: this.state.count+1});
    console.log(this.state.count)
  }

  render(){
    return (
      <div>
      <Breadlist onUpvote={this.onUpvote} count={this.state.count} masterBreadList={this.props.masterBreadList} />
      <NewBreadForm onNewBreadCreation={this.props.onNewBreadCreation}/>
      </div>
    );
  }
}
BreadControl.propTypes = {
  onNewBreadCreation: PropTypes.func
};

export default BreadControl
