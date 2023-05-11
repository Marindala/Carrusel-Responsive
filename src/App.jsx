
import './App.css' 
import { Slides } from './components/Slides'
import styled from 'styled-components';

const Titulo = styled.p`
	font-size: 40px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;


function App() {
  

  return (
    <main>
      <div>
        <Titulo>Slides Code</Titulo>
        <Slides/>
       </div>
    </main>
  )
}

export default App
