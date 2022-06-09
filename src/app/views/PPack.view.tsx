// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PPack from '../features/PPack';

// const { Title, Paragraph } = Typography;

function PPackView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Pack</Title>
        <Paragraph>Este é o conteúdo da página PPack.view</Paragraph>
      </Col> */}

      {/* <Col span={24}>
        <PPackCarousel />
      </Col> */}

      <Col span={24}>
        <PPack />
      </Col>
    </Row>
  );
}

export default PPackView;
