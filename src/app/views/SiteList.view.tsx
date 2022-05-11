// export default function SiteListView() {
//   return <div>toDo: LiteListView</div>;
// }

import { Col, Row, Typography } from 'antd';

import SitesList from '../features/SitesList';

const { Title, Paragraph } = Typography;

function SiteListView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Site List View - Título</Title>
        <Paragraph>
          Este é o conteúdo da Site List View
        </Paragraph>
      </Col>
      <Col span={24}>
        <SitesList />
      </Col>
    </Row>
  );
}

//export default HomeView;
export default SiteListView;
