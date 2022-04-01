import { Col, Row, Typography } from 'antd';
import Pagina1 from '../features/Pagina1';

const { Title, Paragraph } = Typography;

function HomeView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Página 1 - Título</Title>
        <Paragraph>Este é o conteúdo da página 1</Paragraph>
      </Col>
      <Col span={24}>
        <Pagina1 />
      </Col>
    </Row>
  );
}

export default HomeView;