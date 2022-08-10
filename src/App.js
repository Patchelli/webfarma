import './App.css';
import Home from "./pages/Home";
import { themeContext } from './Context'
import { useContext } from 'react';
import Login from './pages/PageLogin/Login';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''

      }}>
      <Home />
    </div>
  );
}

export default App;
