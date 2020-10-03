import React from 'react';
import  './../Styles/npc.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//https://reactjs.org/docs/forms.html
function BasicTextFields() {

  return (
    <form className = {'form'}>
<TextField id="outlined-search" label="State" type="search" variant="outlined" className = "space1"/>
<TextField id="outlined-search" label="Hours" type="search" variant="outlined" className = "space2"/>
<TextField id="outlined-search" label="$ Per Hour" type="search" variant="outlined" className = "space3"/>
      <Button variant="outlined" color="secondary" className = "space4">
        Submit
      </Button>
      <h1 className = "title">Next Payment Calculation</h1>
    </form>
  );
}

export default BasicTextFields