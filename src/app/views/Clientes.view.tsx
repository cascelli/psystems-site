import { Col, Row, Typography } from 'antd';
import Clientes from '../features/Clientes';

const { Title, Paragraph } = Typography;

function ClientesView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>
          Clientes que utilizam ou já utilizaram nossos serviços
        </Title>
        <Paragraph>Este é o conteúdo da página Clientes.view</Paragraph>
      </Col>
      <Col span={24}>
        <Clientes />
      </Col>
    </Row>
  );
}

export default ClientesView;
