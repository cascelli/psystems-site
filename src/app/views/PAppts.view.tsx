import { Col, Row, Typography } from 'antd';
import PAppts from '../features/PAppts';

const { Title, Paragraph } = Typography;

function PApptsView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Power Appoints</Title>
        <Paragraph>Este é o conteúdo da página PAppts.view</Paragraph>
      </Col>
      <Col span={24}>
        <PAppts />
      </Col>
    </Row>
  );
}

export default PApptsView;
