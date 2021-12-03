import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { useAppContext } from './context/appContext';
import CartModal from './components/CartModal';
import Product from './components/Product';
function App() {
  const { isSidebarOpen } = useAppContext();

  let backgroundStyle = '';

  if (isSidebarOpen) {
    backgroundStyle = { background: 'rgba(0,0,0, 0.8)' };
  } else {
    backgroundStyle = { background: '#fff' };
  }
  return (
    <Main className="App" style={backgroundStyle}>
      <Navbar />
      <Sidebar />
      <CartModal />
      <Product />
    </Main>
  );
}

// pass open sidebar here to change background color
const Main = styled.main`
  //background-color: #000;
  height: 100vh;
`;

export default App;
