import './App.css';
import Home from "./pages/Home";
import { themeContext } from './Context'
import { useContext } from 'react';
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
      <Home />
    </div>
  );
}

export default App;
