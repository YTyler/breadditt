import React from 'react';
import PropTypes from 'prop-types';

class Bread extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
  }


  onUpvote(){
    this.setState({count: this.state.count+1});
  }
  onDownvote(){
    this.setState({count: this.state.count-1});
  }

  render(){
    return (
      <div>
      <button onClick={this.onUpvote}>Upvote</button>
      <h4>{this.props.title}</h4> <p>{this.props.content}</p>
      <h4>{this.state.count}</h4>

      <button onClick={this.onDownvote}>Downvote</button>

      </div>
    );
  }
}
export default Bread;




// <img src=`${props.imageURL}`></img>
