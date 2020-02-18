import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBreadList: []
    };
    this.handleAddingNewBreadToList = this.handleAddingNewBreadToList.bind(this);
  }
  handleAddingNewBreadToList(newBread){
    var newMasterBreadList = this.state.masterBreadList.slice();
    newMasterBreadList.push(newBread);
    this.setState({masterBreadList: newMasterBreadList});
  }

  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render={()=><Body onNewBreadCreation={this.handleAddingNewBreadToList} masterBreadList={this.state.masterBreadList} />} />
      </Switch>
      </div>
    );
  }

}

  export default App;
