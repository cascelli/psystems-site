import { Col, Row, Typography } from 'antd';
import PClinic from '../features/PClinic';

const { Title, Paragraph } = Typography;

function PClinicView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Clinic</Title>
        <Paragraph>Este é o conteúdo da página PClinic.view</Paragraph>
      </Col> */}
      <Col span={24}>
        <PClinic />
      </Col>
    </Row>
  );
}

export default PClinicView;
