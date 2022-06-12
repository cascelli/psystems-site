// import { Col, Row, Typography } from 'antd';
import { Carousel, Row } from 'antd';
import pappts01 from '../../assets/images/pappts/pappts01.jpg';
import pappts02 from '../../assets/images/pappts/pappts02.jpg';
import pappts03 from '../../assets/images/pappts/pappts03.jpg';
import pappts04 from '../../assets/images/pappts/pappts04.jpg';

/*
import React from 'react';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
*/

// import { Typography } from 'antd';

// const { Title, Paragraph } = Typography;

/*
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
*/

const contentStyleTitle: React.CSSProperties = {
  height: '50px',
  color: '#fff',
  lineHeight: '22px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyleImage: React.CSSProperties = {
  width: '100%',
  height: '100',
};

export default function PApptsCarousel() {
  return (
    <Carousel autoplay>
      {/* <Carousel autoplay effect='fade'> */}
      {/* <Carousel autoplay dots={false}> */}
      {/*<Carousel autoplay effect='fade'> */}

      {/* 
      <div>
        <h3 style={contentStyle}>Slide 1</h3>
        <Row>
          <span>Teste de imagem</span>
        </Row>
        <Row>
          <img src={logo} alt='Alganews Admin'></img>
        </Row>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 4</h3>
      </div> */}

      {/*
      <div>
        <img
          style={contentStyleImage}
          src='http://react-responsive-carousel.js.org/assets/1.jpeg'
          alt='Imagem 1'
        />
        <h3 style={contentStyleTitle}>Imagem 1</h3>
      </div>
      <div>
        <img
          style={contentStyleImage}
          src='http://react-responsive-carousel.js.org/assets/2.jpeg'
          alt='Imagem 2'
        />
        <h3 style={contentStyleTitle}>Imagem 2</h3>
      </div>
    */}

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts01} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts02} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de Pessoa Física - Geral</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts03} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de Pessoa Física - Endereços</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pappts04} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de Pessoa Física - Complemento
        </h4>
      </div>
    </Carousel>
  );
}
