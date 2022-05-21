import { Col, Row, Typography } from 'antd';
import Contato from '../features/Contato';

const { Title, Paragraph } = Typography;

function ContatoView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Contato</Title>
        <Paragraph>Este é o conteúdo da página Contato.view</Paragraph>
        <div>
          <h4>Google Maps</h4>
          <p>
            <a
              href='https://www.google.com.br/maps/place/R.+Alc%C3%A2ntara,+14+-+Nova+Granada,+Belo+Horizonte+-+MG/@-19.937182,-43.9734356,17z/data=!3m1!4b1!4m5!3m4!1s0xa6970816834137:0xc66e7d6b4bd9e5a2!8m2!3d-19.937182!4d-43.9712469'
              target='_anew'
            >
              Condomínio no Google Street View
            </a>
          </p>

          <p>
            <a
              href='https://www.google.com.br/maps/place/Rua+dos+Timbiras,+638+-+Funcion%C3%A1rios,+Belo+Horizonte+-+MG/@-19.9290734,-43.931452,17z/data=!3m1!4b1!4m5!3m4!1s0xa699e97b55b631:0xa4606c7c7bf6d954!8m2!3d-19.9290734!4d-43.9292633'
              target='_anew'
            >
              Administradora no Google Street View
            </a>
          </p>
        </div>
        <div>
          <Title level={4}>Empresa - Localização</Title>
          {/* <div class='panel-body'>
            <div class='myIframe'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6967000347445!2d-43.973435585149446!3d-19.937181986599747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6970816834137%3A0xc66e7d6b4bd9e5a2!2sR.+Alc%C3%A2ntara%2C+14+-+Nova+Granada%2C+Belo+Horizonte+-+MG!5e0!3m2!1spt-BR!2sbr!4v1491758208351'
                frameborder='0'
                style='border:0'
                allowfullscreen
              ></iframe>
            </div>
          </div> */}

          <iframe
            id='inlineFrameExample'
            title='Inline Frame Example'
            width='100%'
            height='400'
            frameBorder='1' // 1 -> mostra borda, 0 -> nao mostra borda
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6967000347445!2d-43.973435585149446!3d-19.937181986599747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6970816834137%3A0xc66e7d6b4bd9e5a2!2sR.+Alc%C3%A2ntara%2C+14+-+Nova+Granada%2C+Belo+Horizonte+-+MG!5e0!3m2!1spt-BR!2sbr!4v1491758208351'
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
