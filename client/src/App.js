
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Work from './pages/Work';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
const Container=styled.div`
  background-color: rgba(0,0,0,0.94);
  display: flex;
  /* width: 100vw; */
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Container>
      <BrowserRouter>
              <ScrollToTopOnPageChange />
              <Navbar/>
              <Routes>
                <Route exact path="/" element={<Work/>} />
                <Route exact path="/about" element={<Info/>} />
              </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
