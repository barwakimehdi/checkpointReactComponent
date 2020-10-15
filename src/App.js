import React  from 'react';
import ProfilPhoto from './component/profile/ProfilPhoto/ProfilPhoto'
import FullName from './component/profile/FullName/FullName'
import Address from './component/profile/Address/Address'
import './App.css';


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
