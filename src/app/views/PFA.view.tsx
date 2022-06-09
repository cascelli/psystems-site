// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PFA from '../features/PFA';

// const { Title, Paragraph } = Typography;

function PProcView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Failure Analysis</Title>
        <Paragraph>Este é o conteúdo da página PFA.view</Paragraph>
      </Col> */}

      {/* <Col span={24}>
        <PFACarousel />
      </Col> */}

      <Col span={24}>
        <PFA />
      </Col>
    </Row>
  );
}

export default PProcView;
