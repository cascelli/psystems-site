//import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PAppts from '../features/PAppts';
import PApptsCarousel from '../features/PApptsCarousel';

// const { Title, Paragraph } = Typography;
//const { Title } = Typography;

function PApptsView() {
  // todo: implementar carousel para mostrar telas do aplicativo
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Appoints</Title>
      </Col> */}

      {/* <Col span={24}>
        <Title level={4}>Power Appoints</Title>
        <Paragraph>Este é o conteúdo da página PAppts.view</Paragraph>
      </Col> */}

      <Col span={24}>
        <PApptsCarousel />
      </Col>

      <Col span={24}>
        <PAppts />
      </Col>
    </Row>
  );
}

export default PApptsView;
