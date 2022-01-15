import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
