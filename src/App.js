import './App.css';
import AppContext from './AppContent';
import NavigationPanel from './Navigation';
import PageContent from './PageContent';

function App() {
  return (
    <AppContext.Provider value={{
      username: 'idk'
    }}>
      <NavigationPanel />
      <PageContent />
    </AppContext.Provider >
  );
}

export default App;
