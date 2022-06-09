import { Col, Row, Typography } from 'antd';
import EmpVirtual from '../features/EmpVirtual';

const { Title, Paragraph } = Typography;

function EmpVirtualView() {
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Empresa Virtual</Title>
        <Paragraph>Este é o conteúdo da página EmpVirtual.view</Paragraph>
        <Paragraph>
          Você gostaria de poder organizar os processos e acessos a documentos,
          atribuir um controle de restrição e proteger os mesmos contra
          apagamento acidental, contaminação por vírus, criando uma
          infraestrutura racional de sua empresa e torná-la acessível a partir
          de qualquer local para um ou mais funcionários ?
        </Paragraph>
        <ul>
          <li>
            Você saiu de férias e precisou acessar um documento a partir do
            hotel em que está hospedado ?
          </li>
          <li>
            Você está em uma reunião com cliente e precisa receber/enviar um
            e-mail a partir de seu desktop do trabalho ?
          </li>
          <li>
            Você precisa alimentar um sistema com alguma informação coletada
            diretamentre em campo ?
          </li>
          <li>
            Você precisa alimentar e emitir um relatório disponibilizado em um
            aplicativo da empresa e entregá-lo em tempo real ao seu cliente
            antes de encerrar uma reunião ou um serviço estando fora das
            dependências fisicas da mesma ?
          </li>
          <li>
            Você acordou indisposto e não conseguiu ir trabalhar e precisa
            concluir um trabalho para disparar um contrato com cliente que
            aguarda confirmação urgente e não pode comparecer de imediato ao seu
            local para concluir o processo ?
          </li>
          <li>
            Você foi embora do seu serviço no final de semana, desligou sua
            estação de trabalho e precisou de um documento armazenado no mesmo
            com urgência ?
          </li>
          <li>
            Você quer manter alguns documentos de seu desktop do trabalho
            sincronizados com o seu computador de casa, de modo a poder
            transitar de um local para o outro e ter acesso as últimas
            modificações ?
          </li>
        </ul>
        <Paragraph>
          Possuimos expertise na configuração de ambientes empresariais
          virtualizados para acesso de usuários a equipamentos, arquivos e
          sistemas a partir de conexões de internet.
        </Paragraph>
        <Paragraph>
          Configuramos a "virtualização" de acesso a infraestrutura empresarial
          na internet.
        </Paragraph>
        <Paragraph>
          Configuramos uma "nuvem empresarial privativa" hospedada dentro da
          própria infraestrutura local da mesma e a tornamos acessível
          externamente pelo seu browser proporcionando a possibilidade de editar
          documentos compatíveis com o MS-Word, MS-Excel, MS-PowerPoint,
          visualizar arquivos em formato PDF, imagens, vídeos e sons a partir do
          próprio navegador estando estes armazenados pastas compartilhadas do
          servidor da empresa :
        </Paragraph>
        <ul>
          <li>
            Configuração de infraestrutura de rede local, servidores de
            arquivos, firewalls, gateways, roteadores, rotinas de cópias de
            segurança automatizadas, redundâncias e alta disponibilidade.
          </li>
          <li>Acesso a documentos, incluindo criação e edição.</li>
          <li>Acesso a aplicativos internos diversos.</li>
          <li>
            Acesso ao equipamento desktop de cada funcionário dentro da empresa,
            com possibilidade de energização do mesmo se ele estiver desligado.
          </li>
          <li>
            Transferência de arquivos remotos e compartilhamento de links de
            download.
          </li>
          <li>
            Sincronização de documentos de usuários entre equipamentos,
            semelhante a OneDrive, GoogleDrive, DropBox, etc. através de
            clientes de sincronização.
          </li>
        </ul>
        <Paragraph>
          Utilizamos software livre nessas soluções visando sempre a redução de
          custos e as soluções utilizadas são estáveis e robustas. A nossa
          prórpria infraestrutura faz uso destas soluções de modo a termos
          experiência e confiança ao propor opções plausíveis aos nossos
          clientes de modo a atendê-los plenamente.
        </Paragraph>
        <Paragraph>
          Entre em contato conosco para obter mais informações.
        </Paragraph>
      </Col>
      <Col span={24}>
        <EmpVirtual />
      </Col>
    </Row>
  );
}

export default EmpVirtualView;
