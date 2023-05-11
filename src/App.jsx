
import './App.css' 
import { Slides, Slide, TextoSlide } from './components/Slides'
import styled from 'styled-components';
import img1 from './assets/Slide1.jpg';
import img2 from './assets/Slide2.jpg';
import img3 from './assets/Slide3.jpg';
import img4 from './assets/Slide4.jpg';

const Titulo = styled.p`
	font-size: 40px;
	font-weight: 900;
	text-transform: uppercase;
	margin-bottom: 10px;
`;


function App() {
  

  return (
    <main>
      <Titulo>Experiencia Código</Titulo>
			<Slides controles={true}>
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p></p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p></p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p></p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>Experiencia Código</p>
					</TextoSlide>
				</Slide>
			</Slides>

			<Titulo>Mejora tú Código </Titulo>
			<Slides controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide >
			
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://portfolio-marina-marindala.netlify.app/#home">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						
					</TextoSlide>
				</Slide>
			</Slides>
    </main>
  )
}

export default App
