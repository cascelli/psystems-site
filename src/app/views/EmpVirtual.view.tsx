// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import EmpVirtual from '../features/EmpVirtual';

// const { Title, Paragraph } = Typography;

function EmpVirtualView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Empresa Virtual</Title>
        <Paragraph>Este é o conteúdo da página EmpVirtual.view</Paragraph>
      </Col> */}

      {/* <Col span={24}>
        <EmpVirtualCarousel />
      </Col> */}

      <Col span={24}>
        <EmpVirtual />
      </Col>
    </Row>
  );
}

export default EmpVirtualView;
