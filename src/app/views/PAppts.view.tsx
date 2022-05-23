import { Col, Row, Typography } from 'antd';
import PAppts from '../features/PAppts';

// const { Title, Paragraph } = Typography;

function PApptsView() {
  return (
    <Row>
      <Col span={24}>
        <PAppts />
      </Col>
    </Row>
  );
}

export default PApptsView;
