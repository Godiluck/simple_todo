import {BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
                  <li>
                      <Link to='/tasks'>Tasks</Link>
                  </li>
              </ul>
          </div>
      </Router>
  );
}

export default App;
