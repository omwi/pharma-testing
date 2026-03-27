import AppProvider from './provider.jsx';
import AppRouter from './router.jsx';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
