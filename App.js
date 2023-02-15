import React from 'react';
import Weather from './Country_search';
import {Routes,Route} from 'react-router-dom';
import Name from './Capital_Weather';
import Search_bar from '../filtersearch';
// import Usereducer from '../../usereducer';
import { Program} from '../../Challege Website/Program';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Weather />}/>
        <Route path='/Capital_Weather/:location' element={<Name/>}/>
      </Routes> */}
      {/* <Usereducer/> */}
      {/* <Search_bar/> */}
      <Program/>

    </div>
  )
}
export default App
