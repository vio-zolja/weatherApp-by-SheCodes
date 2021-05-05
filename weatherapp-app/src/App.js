import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Searchengine from "./searchEngine.js"

function App() {
  return (
    <div className="App">
    <div className="container">
    <div className="header">
    <div className="row">
      <div className="col-8">
        <Searchengine />
      </div>
    </div>
    </div>      
    </div>
    </div>
  );
}

export default App;
