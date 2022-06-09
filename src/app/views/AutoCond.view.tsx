import { Col, Row, Typography } from 'antd';
import AutoCond from '../features/AutoCond';

const { Title, Paragraph } = Typography;

function AutoCondView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Automação de Condomínio</Title>
        <Paragraph>Este é o conteúdo da página AutoCond.view</Paragraph>
      </Col>
      <Col span={24}>
        <AutoCond />
      </Col>
    </Row>
  );
}

export default AutoCondView;
