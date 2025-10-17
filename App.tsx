/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Toast from 'react-native-toast-message';
import NavContainer from './src/navigation';
import { store } from './src/redux/store';
import AppProviders from './AppProviders';

// Initialize persistor
const persistor = persistStore(store);
// Filter specific console warnings safely
const originalWarn = console.warn;
console.warn = (warning: any) => {
  if (typeof warning === 'string' && warning.includes('SSRProvider')) {
    console.log('Filtered SSRProvider warning:', warning);
  } else {
    originalWarn(warning);
  }
};

// SubApp component
const SubApp = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavContainer />
      </PersistGate>
    </Provider>
    <Toast />
  </>
);

// Main App wrapped with Sentry
function App() {
  return (
    <AppProviders>
      <SubApp />
    </AppProviders>
  );
}

export default App;
