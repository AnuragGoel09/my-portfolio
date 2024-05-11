
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Work from './pages/Work';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
const Container=styled.div`
  background-color: rgba(0,0,0,0.94);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
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
