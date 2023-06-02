import "./App.css";
import { Slides, Slide, TextoSlide } from "./components/Slides";
import styled from "styled-components";
import data from "./data";
import Navbar from "./components/Navbar";

const Titulo = styled.p`
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
//código repetido ohh nooo

function App() {
  return (
    <main>
      <div>
      <Navbar/>
      </div>
      <br></br>
      <Titulo>Experiencia Código</Titulo>
      <Slides controles={true}>
        {data.map(({ img, alt, src }, i) => (
          <Slide key={i}>
            <a href={src}>
              <img src={img} alt={alt} />
            </a>
          </Slide>
        ))}

        <TextoSlide>
          <p></p>
        </TextoSlide>
      </Slides>

      <Titulo>Mejora tú Código </Titulo>
      <Slides
        controles={true}
        autoplay={true}
        velocidad="3000"
        intervalo="5000"
      >
        {data.map(({ img, alt, src }, i) => (
          <Slide key={i}>
            <a href={src}>
              <img src={img} alt={alt} />
            </a>
          </Slide>
        ))}

        <TextoSlide>
          <p></p>
        </TextoSlide>
      </Slides>
    </main>
  );
}

export default App;
