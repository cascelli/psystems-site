// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';
import PMed from '../features/PMed';

// const { Title, Paragraph } = Typography;

// todo: implementar carousel para mostrar telas do aplicativo

function PMedView() {
  return (
    <Row>
      {/* <Col span={24}>
        <Title level={4}>Power Med</Title>
        <Paragraph>Este é o conteúdo da página PMed.view</Paragraph>
      </Col> */}
      <Col span={24}>
        <PMed />
      </Col>
    </Row>
  );
}

export default PMedView;
