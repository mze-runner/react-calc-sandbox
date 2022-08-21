import AppContext from './AppContext';
import { BrowserRouter } from "react-router-dom";
import NavigationPanel from './Layout/Navigation';
import AppRouter from './AppRouter';

function App() {
  return (
    <AppContext.Provider value={{
      username: 'idk'
    }}>
      <BrowserRouter>
        <NavigationPanel />
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider >
  );
}

export default App;
