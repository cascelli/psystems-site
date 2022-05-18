import { Col, Row, Typography } from 'antd';
import Contato from '../features/Contato';

const { Title, Paragraph } = Typography;

function ContatoView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Contato</Title>
        <Paragraph>Este é o conteúdo da página Contato.view</Paragraph>
      </Col>
      <Col span={24}>
        <Contato />
      </Col>
    </Row>
  );
}

export default ContatoView;
