import logo from './logo.svg';
import './App.css';

import MainLayout from './layout/MainLayout';
import MainLayoutSidebar from './layout/MainLayoutSidebar';
import Routes from './Routes';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn } = useSelector((state) => state.userState);


  return (
      Routes(isLoggedIn)
  );
}

export default App;

