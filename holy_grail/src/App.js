import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Navegacion from './components/Navegacion/Navegacion';
import Contenido from './components/Contenido/Contenido';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <Fragment>
      <Header/>
      <Navegacion/>
      <Contenido/>
      <Footer/>
    </Fragment>
  );
}

export default App;
