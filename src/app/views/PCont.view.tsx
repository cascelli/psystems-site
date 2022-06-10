// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PCont from '../features/PCont';

// const { Title, Paragraph } = Typography;

function PContView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Contábil</Title>
        <Paragraph>Este é o conteúdo da página PCont.view</Paragraph>
      </Col> */}

      {/* <Col span={24}>
        <PContCarousel />
      </Col> */}

      <Col span={24}>
        <PCont />
      </Col>
    </Row>
  );
}

export default PContView;
