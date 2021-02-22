import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'
import Formfield from './formfield/Formfield.js'
import Coolbutton from './coolbutton/Coolbutton.js'

const App = () => {
  
  return (
    <React.Fragment>

       <Navbar />
       <Formfield label="name" type="text" placeholder="e.g Alex Smith" />
       <Formfield label="Email" type ="email" placeholder="e.g. alexsmith@gmail.com" />
       
       <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
       <CoolButton isSmall isSuccess>Button 2</CoolButton>

    </React.Fragment>
     
     
    )
};

export default App;


