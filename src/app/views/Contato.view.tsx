import { Col, Row, Typography } from 'antd';
import Contato from '../features/Contato';

const { Title, Paragraph } = Typography;

function ContatoView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Contato</Title>
        <Paragraph>
          Para maiores informações, entre em contato conosco. Teremos o maior
          prazer em lhe atender e esclarecer dúvidas ou demandas existentes.
          Nossa equipe técnica poderá realizar uma análise de suas necessidades
          específicas e oferecer opções de soluções que possam lhe atender de
          maneira mais adequada.
        </Paragraph>
        <Title level={4}>Endereço</Title>
        <Paragraph>Avenida Raja Gabáglia, 1001 - Sala 602/A</Paragraph>
        <Paragraph>Bairro Luxemburgo</Paragraph>
        <Paragraph>Belo Horizonte - Minas Gerais - Brasil</Paragraph>
        <Paragraph>CEP 30.380-090</Paragraph>
        <Paragraph>Telefone : +55 31 3372-0924</Paragraph>
        <Paragraph>Email : psystems@psystems.com.br</Paragraph>
        <div>
          <Title level={4}>Google Maps</Title>
          <p>
            <a
              href='https://www.google.com/maps/place/Av.+Raja+Gab%C3%A1glia,+1001+-+Luxemburgo,+Belo+Horizonte+-+MG,+30380-403/@-19.9440397,-43.9565586,17z/data=!3m1!4b1!4m5!3m4!1s0xa6979dbf267d1b:0xa48562e52b11ecaa!8m2!3d-19.9440397!4d-43.9565586'
              target='_anew'
            >
              Power Systems no Google Street View
            </a>
          </p>
        </div>
        <div>
          <Title level={4}>Localização</Title>
          <iframe
            title='Contato'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.533957032177!2d-43.958747285018916!3d-19.944034643896416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6979dbf267d1b%3A0xa48562e52b11ecaa!2sAv.%20Raja%20Gab%C3%A1glia%2C%201001%20-%20Luxemburgo%2C%20Belo%20Horizonte%20-%20MG%2C%2030380-403!5e0!3m2!1spt-BR!2sbr!4v1653230628027!5m2!1spt-BR!2sbr'
            width='100%'
            height='450'
            frameBorder='1'
            loading='lazy'
          ></iframe>
        </div>
      </Col>
      <Col span={24}>
        <Contato />
      </Col>
    </Row>
  );
}

export default ContatoView;
