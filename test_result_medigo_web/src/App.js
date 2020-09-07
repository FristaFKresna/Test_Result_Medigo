import React from 'react';
import { HeaderNavBar, UnderConstruction } from './components';
import { Home, SpesialiasiDokter, Jadwal, ProfileDokter } from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div style={style.container}>
      <HeaderNavBar/>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/spesialisasi'>
          <SpesialiasiDokter/>
        </Route>

        <Route path='/jadwal'>
          <Jadwal/>
        </Route>

        <Route path='/dokter'>
          <ProfileDokter/>
        </Route>

        <Route exact path='*'>
          <UnderConstruction/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const style = {
  container : {backgroundColor : '#E1F7E8', height : '100vh'}
}
