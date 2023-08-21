
import { useContext } from 'react';
import './Utils.css';
import MainModal from './components/main-modal/MainModal';
import Navbar from './components/navbar/Navbar';
import Router from './components/router/Router';
import SideNav from './components/side-nav/SideNav';
import { DataContext } from './context/DataContext';

function App() {
  const{showMainModal,mainModalMode}=useContext(DataContext)
  return (
    <div className="App">
      <Navbar/>
      {showMainModal&&<MainModal mode={mainModalMode}/>}
      <SideNav/>
      <Router/>
    </div>
  );
}

export default App;
