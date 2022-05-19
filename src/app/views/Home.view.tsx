import { Col, Row, Typography } from 'antd';
import Home from '../features/Home';

const { Title, Paragraph } = Typography;

function HomeView() {
  return (
    <Row>
      <Col span={24}>
        <Paragraph>
          ToDo : Implementar Feature com componente carousel
        </Paragraph>
        <Paragraph>
          ToDo : Mover o conteúdo de texto abaixo para a feature Home
        </Paragraph>

        <Title level={4}>A empresa</Title>
        <Paragraph>
          Fundada em 1997, A Power Systems desenvolve e disponibiliza soluções
          de ponta em informática para atender aos seus clientes integralmente.
          Fornecemos produtos e serviços com profissionais de alta qualidade,
          que caracterizam a solução de futuro tecnológico do mercado ao
          cliente. Utilizamos ferramentas tecnológicas atualizadas com a
          realidade do mercado visando uma maior qualidade, velocidade e
          interconectividade com o mundo exterior. Através de parcerias,
          prestamos serviços nas seguites áreas :
        </Paragraph>
        <ul>
          <li>Consultoria e planejamento empresarial</li>
          <li>
            Desenvolvimento de sistemas empresariais para profissionais liberais
          </li>
          <li>Desenvolvimento de sistemas para internet e intranet</li>
          <li>Consultoria em informática (Hardware e Software)</li>
          <li>Consultoria em Home Office</li>
          <li>Consultoria em Confiabilidade</li>
          <li>Consultoria em TI</li>
          <li>Consultoria em servidores (Windows e linux)</li>
          <li>Configuraçôes de Firewall, gateways e virtualização</li>
          <li>Consultoria em infraestrutura de redes</li>
          <li>
            Consultoria em acesso remoto a aplicativos, arquivos e equipamentos
            empresariais pela internet
          </li>
          <li>
            Consultoria em cloud computing (nuvem corporativa privativa
            hospedada dentro do próprio ambiente empresarial)
          </li>
          <li>
            Aplicativos voltados para automações de empresas de serviços,
            consultórios, advogados, clinicas, condomínios, contabilidades, etc.
          </li>
          <li>
            Treinamentos e uso aplicativos e ferramentas próprios voltadas para
            área de confiabilidade
          </li>
          <li>Consultoria em engenharia eletrica/eletrônica</li>
          <li>Projetos elétricos/eletrônicos</li>
        </ul>
        <Title level={4}>Aplicativos</Title>
        <Paragraph>
          Selecione uma das categorias abaixo para obter informações sobe as
          soluções desenvolvidas pela Power Systems que melhor se encaixem no
          tipo de atividade exercida por você ou sua empresa. Para pesquisar
          diretamente nossas soluções, selecione a opção Aplicativos do menu de
          opções. Os nossos softwares são bastante flexíveis e possuem a
          característica de se adaptarem com grande facilidade a necessidades
          distintas. Tenha disponível à suas mãos, de qualquer local, a qualquer
          hora, a qualquer dia, acesso a seus dados de maneira rápida, fácil,
          eficiente e segura. Com as novas tecnologias de acesso remoto
          disponíveis, pode-se :
        </Paragraph>
        <ul>
          <li>
            Cadastrar, alterar e imprimir todos os relatórios de nossos
            aplicativos na impressora local da máquina em que você estiver
            conectado, ganhando assim agilidade, eficiência e rapidez de
            atendimento a seus clientes.
          </li>
          <li>
            Os dados armazenados nos bancos de dados estarão disponíveis de modo
            on-line, ou seja, atualizados imediatamente, evitando-se consultas
            extras e gastos desnecessários com telefonemas ao seu
            escritório-sede para solicitações de atualização das informações.
          </li>
          <li>
            Usuários em trânsito poderão se beneficiar bastante desta tecnologia
            de acesso remoto pois poderão cadastrar informações, fechar
            negócios, consultar saldo atualizado em estoque, emitir propostas,
            consultar status de realização de serviços de clientes, emitir
            orçamentos, enviar mensagens a outros usuários do sistema, marcar e
            consultar compromissos em sua agenda pessoal, etc.
          </li>
          <li>
            A redução de custos na empresa poderá ser reduzida, uma vez que os
            equipamentos de acesso remoto podem ser máquinas com baixo poder de
            processamento (Um microcomputador com 64 Megabytes de memória RAM e
            clock de 500 Mhz são suficientes para executar nossos aplicativos
            remotamente).
          </li>
          <li>
            Pode-se utilizar Linux nas estações e evitar gastos desnecessários
            com pagamento de licenças de Windows.
          </li>
          <li>
            Nossos modelos de servidores configurados realizam cópias de
            segurança diariamente dos bancos de dados armazenados, garantindo
            assim uma maior segurança nas informações armazenadas em caso de
            algum problema.
          </li>
          <li>
            O processo de atualização de novas versões dos aplicativos se torna
            mais fácil e rápido uma vez que, estando o banco de dados armazenado
            diretamente em nosso servidor, torna os processos de manutenção e
            atualização mais rápidos.
          </li>
          <li>
            Obtenha suporte on-line aos aplicativos através de software de
            assistência remota que permite a interação com o usuário diretamente
            na tela do aplicativo que estiver sendo executado, tornando o
            processo de detecção e resolução de problemas mais eficiente e
            rápido, uma vez que, tanto o usuário quanto o responsável pelo
            suporte podem interagir simultâneamente com a aplicação para
            verificarem "in-loco" o que está ocorrendo.
          </li>
          <li>
            Conexões a cabo, com modems ADSL ou mesmo discadas com modem de até
            28800 kbps podem ser utilizadas para acesso remoto ao seu
            aplicativo. Quanto maior a velocidade de conexão, maior a eficiência
            e qualidade das imagens. Com conexões à Internet de 256 kbps de
            velocidade de transferência de dados, você terá à sua disposição a
            imagem das telas praticamente idênticas a uma conexão local. Quanto
            a velocidade de processamento do aplicativo e geração de relatórios,
            será maior do que se você estivesse em sua rede local, uma vez que
            nosso servidor é inteiramente dedicado a hospedagem de banco de
            dados.
          </li>
          Para maiores informações, acesse as demonstrações dos nossos
          aplicativos, diretamente de nosso servidor para avaliá-los melhor.
        </ul>
      </Col>
      <Col span={24}>
        <Home />
      </Col>
    </Row>
  );
}

export default HomeView;
