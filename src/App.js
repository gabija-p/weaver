import SignUp from './screens/SignUp.jsx';
import Home from './screens/Home.jsx';
import {
  Route,
  Routes
} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route path="/signup"
          element={<SignUp />} />
      </Routes>
    </div>
  );

}

export default App;
