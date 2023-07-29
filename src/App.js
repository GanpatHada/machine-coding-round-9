
import './Utils.css';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';
import SideNav from './components/side-nav/SideNav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Router/>
    </div>
  );
}

export default App;
