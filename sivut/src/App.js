import React from 'react'
import Banneri from './komponentit/banneri'
import Sponssi from './komponentit/sponssi-osuus';
import Vujuvuosi from './komponentit/vujuviikko';
import "./index.css";

// Whole page
const App = () => {



  return (
    <>
    <Banneri></Banneri>
    <Vujuvuosi></Vujuvuosi>
    <Sponssi></Sponssi>
    </>
  )
}



export default App