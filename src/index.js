import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Navigation from 'Navigation';
import { store, persistedStore } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Navigation></Navigation>
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
