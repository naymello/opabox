import React from 'react';

import Navbar from './components/Navbar';

import InterlaceSection from './components/InterlaceSection';
import OrdenaListaSection from './components/OrdenaListaSection';

import { GlobalStyles, Wrapper } from './styles/styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <OrdenaListaSection />
        <InterlaceSection />
      </Wrapper>
    </>
  );
}

export default App;
