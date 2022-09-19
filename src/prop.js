import React from 'react';

// Explaining props in React
function Wel(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function Welcome() {
    return (
      <div>
        <Wel name="Mahek" />
        <Wel name="Anubhav" />
        <Wel name="Edite" />
      </div>
    );
  }
  
  export default Welcome;
  