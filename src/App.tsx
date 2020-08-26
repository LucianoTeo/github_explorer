import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Layout from './components/wrapper';


const App: React.FC = () => (
  <>
  <GlobalStyle />
  <Layout>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Layout>
  </>
); 

export default App;
