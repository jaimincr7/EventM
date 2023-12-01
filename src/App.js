import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click <Link to="/addEvent">Here</Link> to Add Event.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link to="/allEvent">See All Events</Link>
        </a>
      </header>
    </div>
  );
}

export default App;
