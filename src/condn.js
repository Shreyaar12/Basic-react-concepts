
import React from 'react';
// Explaining conditional rendering in react
function Condn() {
  const student= 12;
  const isLoggedin=true;
  return (
    <React.Fragment>
     {isLoggedin && <p> Welcome Student number: {student}</p>}
     {!isLoggedin && <p>Student not logged in </p>}

    
    </React.Fragment>
     
  
  );
}

export default Condn;
