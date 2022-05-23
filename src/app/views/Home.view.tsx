// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import Home from '../features/Home';

// const { Title, Paragraph } = Typography;

function HomeView() {
  // todo: implementar carousel para mostrar os aplicativos e informações de áreas de atuacao
  return (
    <Row>
      {/* <Col span={24}>
        <HomeCarousel />
      </Col> */}

      <Col span={24}>
        <Home />
      </Col>
    </Row>
  );
}

export default HomeView;
