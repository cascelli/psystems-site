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
        <Title level={4}>Sites Úteis</Title>
        <Paragraph>
          Listamos abaixo referências de sites e parceiros de negócios com
          funcionalidades utilizadas em nossas soluções passíveis de serem
          necessárias em algum momento por nossos clientes.
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
