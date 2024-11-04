import React from 'react';

// Add react-live imports you need here
const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      color: "black",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);


const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
};

export default ReactLiveScope;
