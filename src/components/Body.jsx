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

  return (
    <div style={bodyStyle}>

      <BreadControl onNewBreadCreation={props.onNewBreadCreation} masterBreadList={props.masterBreadList}/>
      <Subbreadits/>
    </div>
  );
}

export default Body;
