import React from 'react';
import BreadControl from './BreadControl'
import Subbreadits from './Subbreadits'
import NewBreadForm from './NewBreadForm'


function Body(props) {
  const bodyStyle = {
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }

  let ourBreadList = props.masterBreadList.sort((a,b) => {
    return b.count - a.count
  });

  return (
    <div style={bodyStyle}>

      <BreadControl onAddCount={props.onAddCount} onNewBreadCreation={props.onNewBreadCreation} masterBreadList={ourBreadList}/>
      <Subbreadits/>
    </div>
  );
}

export default Body;
