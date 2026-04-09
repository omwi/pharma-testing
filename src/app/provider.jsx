import { APIProvider } from '@vis.gl/react-google-maps';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { handleGoogleApiError } from '@/utils/error';

import { GOOGLE_MAPS_API_KEY } from './env';
import { persistor, store } from './store';

export default function AppProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <APIProvider
          apiKey={GOOGLE_MAPS_API_KEY}
          onError={handleGoogleApiError}
        >
          {children}
        </APIProvider>
      </PersistGate>
    </Provider>
  );
}
