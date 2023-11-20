import React from 'react';



const ViewBoxesWithColorAndText = () => {
  return (
    <div
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <div style={{backgroundColor: 'blue', flex: 0.3}} />
      <div style={{backgroundColor: 'red', flex: 0.5}} />
      <h1>Hello World!</h1>
    </div>
  );
};

export default ViewBoxesWithColorAndText;