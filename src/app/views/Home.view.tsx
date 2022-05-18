import { Col, Row, Typography } from 'antd';
import Pagina1 from '../features/Pagina1';

const { Title, Paragraph } = Typography;

function HomeView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Página 1 - Título</Title>
        <Paragraph>Este é o conteúdo da página 1</Paragraph>
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
        <Pagina1 />
      </Col>
    </Row>
  );
}

export default HomeView;
