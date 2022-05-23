// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PAppts from '../features/PAppts';

// const { Title, Paragraph } = Typography;

function PApptsView() {
  // todo: implementar carousel para mostrar telas do aplicativo
  return (
    <Row>
      {/* <Col span={24}>
        <PApptsCarousel />
      </Col> */}

      <Col span={24}>
        <PAppts />
      </Col>
    </Row>
  );
}

export default PApptsView;
