import { Col, Row, Typography } from 'antd';
import Atuacao from '../features/Atuacao';

const { Title, Paragraph } = Typography;

function AtuacaoView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Ramos de atuação</Title>
        <Paragraph>Este é o conteúdo da página Atuacao.view</Paragraph>
      </Col>
      <Col span={24}>
        <Atuacao />
      </Col>
    </Row>
  );
}

export default AtuacaoView;
