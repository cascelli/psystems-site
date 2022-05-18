import { Col, Row, Typography } from 'antd';
import PCont from '../features/PCont';

const { Title, Paragraph } = Typography;

function PContView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Power Contabil</Title>
        <Paragraph>Este é o conteúdo da página PCont.view</Paragraph>
      </Col>
      <Col span={24}>
        <PCont />
      </Col>
    </Row>
  );
}

export default PContView;