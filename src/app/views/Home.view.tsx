import { Col, Row, Typography } from 'antd';
import Home from '../features/Home';

const { Title, Paragraph } = Typography;

function HomeView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Power Systems - Home</Title>
        <Paragraph>Este é o conteúdo da Home</Paragraph>
        <Paragraph>
          ToDo : Implementar Feature com componente carousel
        </Paragraph>
        <Paragraph>
          ToDo : Implementar Feature de descrição da empresa
        </Paragraph>
        <Paragraph>
          ToDo : Implementar Feature com descrição dos aplicativos
        </Paragraph>
        <Paragraph>
          ToDo : Implementar Feature com tabela de aplicativos
        </Paragraph>
      </Col>
      <Col span={24}>
        <Home />
      </Col>
    </Row>
  );
}

export default HomeView;
