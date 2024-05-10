
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';

const Container=styled.div`
  width: 100vw;
  background-color: rgba(0,0,0,0.94);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  
`;

function App() {
  return (
    <Container>
      <Navbar/>
      <div style={{height:'200vh',width:'100%',backgroundColor:'rgba(0,0,0,0.94)'}}></div>
    </Container>
  );
}

export default App;
