// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PProc from '../features/PProc';

// const { Title, Paragraph } = Typography;

function PProcView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Process</Title>
        <Paragraph>Este é o conteúdo da página PProc.view</Paragraph>
      </Col> */}
      <Col span={24}>
        <PProc />
      </Col>
    </Row>
  );
}

export default PProcView;
