// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import Home from '../features/Home';

// const { Title, Paragraph } = Typography;

function HomeView() {
  return (
    <Row>
      <Col span={24}>
        <Home />
      </Col>
    </Row>
  );
}

export default HomeView;
