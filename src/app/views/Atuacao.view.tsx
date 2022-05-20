// import { Col, Row, Typography } from 'antd';
import { Col, Row } from 'antd';

import Atuacao from '../features/Atuacao';

// const { Title, Paragraph } = Typography;

function AtuacaoView() {
  return (
    <Row>
      <Col span={24}>
        <Atuacao />
      </Col>
    </Row>
  );
}

export default AtuacaoView;
