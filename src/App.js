import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from './components/ShowDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact render={(routerProps) => <Body />} />
      <Route path="/:movieID" exact render={(routerProps) => <ShowDetail {...routerProps} />} />
      <Footer />
    </Router>
  );
}

export default App;
