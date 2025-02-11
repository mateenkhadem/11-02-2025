import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Video from './components/videos/index.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video />
      </header>
    </div>
  );
}

export default App;
