// import { Col, Row, Typography } from 'antd';
import { Carousel, Row } from 'antd';

import pclinAgenda from '../../assets/images/pclinic/pclin-agenda.jpg';

import pclinAgendaCompromissos from '../../assets/images/pclinic/pclin-agenda-compromissos.jpg';
import pclinAgendaProcedimentos from '../../assets/images/pclinic/pclin-agenda-procedimentos.jpg';
import pclinAgendaCompromissosGeral from '../../assets/images/pclinic/pclin-agenda-compromissos-geral.jpg';
import pclinAgendaCompromissosValores from '../../assets/images/pclinic/pclin-agenda-compromissos-valores.jpg';
import pclinAgendaCompromissosMateriais from '../../assets/images/pclinic/pclin-agenda-compromissos-materiais.jpg';
import pclinAgendaCompromissosTaxas from '../../assets/images/pclinic/pclin-agenda-compromissos-taxas.jpg';

import pclinCadMedicosGeral from '../../assets/images/pclinic/pclin-cad-medicos-geral.jpg';
import pclinCadMedicosCredenciamento from '../../assets/images/pclinic/pclin-cad-medicos-credenciamento.jpg';
import pclinCadMedicosAgenda from '../../assets/images/pclinic/pclin-cad-medicos-agenda.jpg';

import pclinCadClienteGeral from '../../assets/images/pclinic/pclin-cliente-geral.jpg';
import pclinCadClienteEnderecos from '../../assets/images/pclinic/pclin-cliente-enderecos.jpg';
import pclinCadClienteComplemento from '../../assets/images/pclinic/pclin-cliente-complemento.jpg';

import pclinCodConvenios from '../../assets/images/pclinic/pclin-cod-convenios.jpg';
import pclinCodPlanosDeAssociados from '../../assets/images/pclinic/pclin-cod-planos-de-associados.jpg';

import pclinCodProcedimentosGeral from '../../assets/images/pclinic/pclin-cod-procedimentos-geral.jpg';
import pclinCodProcedimentosValoresPorConvenio from '../../assets/images/pclinic/pclin-cod-procedimentos-valores-por-convenio.jpg';
import pclinCodProcedimentosFichaBancada from '../../assets/images/pclinic/pclin-cod-procedimentos-ficha-bancada.jpg';
import pclinCodProcedimentosFrasesPadrao from '../../assets/images/pclinic/pclin-cod-procedimentos-frases-padrao.jpg';

import pclinContaAReceber from '../../assets/images/pclinic/pclin-conta-a-receber.jpg';
import pclinEstoqueGeral from '../../assets/images/pclinic/pclin-estoque-geral.jpg';
import pclinEstoqueFornecedores from '../../assets/images/pclinic/pclin-estoque-fornecedores.jpg';
import pclinEstoqueDadosAdicionais from '../../assets/images/pclinic/pclin-estoque-dados-adicionais.jpg';

import pclinFluxoCaixa from '../../assets/images/pclinic/pclin-fluxo-caixa.jpg';

import pclinLaboratorioLaudos from '../../assets/images/pclinic/pclin-laboratorio-laudos.jpg';
import pclinLaboratorioLaudosHemograma from '../../assets/images/pclinic/pclin-laboratorio-laudos-hemograma.jpg';
import pclinLaboratorioLaudosHemograma1 from '../../assets/images/pclinic/pclin-laboratorio-laudos-hemograma-1.jpg';
import pclinLaboratorioLaudosHemograma2 from '../../assets/images/pclinic/pclin-laboratorio-laudos-hemograma-2.jpg';
import pclinLaboratorioLaudosHemograma3 from '../../assets/images/pclinic/pclin-laboratorio-laudos-hemograma-3.jpg';

import pclinNotaSaidaGeral from '../../assets/images/pclinic/pclin-nota-saida-geral.jpg';
import pclinNotaSaidaServicos from '../../assets/images/pclinic/pclin-nota-saida-servicos.jpg';
import pclinNotaSaidaTotais from '../../assets/images/pclinic/pclin-nota-saida-totais.jpg';
import pclinNotaSaidaCupom from '../../assets/images/pclinic/pclin-nota-saida-cupom.jpg';

import pclinRelArrecadacao from '../../assets/images/pclinic/pclin-rel-arrecadacao.jpg';
import pclinRelArrecadacaoAgenda from '../../assets/images/pclinic/pclin-rel-arrecadacao-agenda.jpg';
import pclinRelArrecadacaoAgendaSumario from '../../assets/images/pclinic/pclin-rel-arrecadacao-agenda-sumario.jpg';
import pclinRelArrecadacaoCidades from '../../assets/images/pclinic/pclin-rel-arrecadacao-cidades.jpg';

import pclinRelProcedimentos from '../../assets/images/pclinic/pclin-rel-procedimentos.jpg';
import pclinRelProcedimentosNotas from '../../assets/images/pclinic/pclin-rel-procedimentos-notas.jpg';

/*
import pmedCadastroClienteGeral from '../../assets/images/pmed/pmed-cadastro-cliente-geral.jpg';
import pmedCadastroClienteEnderecos from '../../assets/images/pmed/pmed-cadastro-cliente-enderecos.jpg';
import pmedCadastroClienteComplemento from '../../assets/images/pmed/pmed-cadastro-cliente-complemento.jpg';
import pmedCadastroClienteContatos from '../../assets/images/pmed/pmed-cadastro-cliente-contatos.jpg';
import pmedCadastroClienteDocumentos from '../../assets/images/pmed/pmed-cadastro-cliente-documentos.jpg';
import pmedCadastroClienteAnamnesesHistorico from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-historico.jpg';
import pmedCadastroClienteAnamnesesHistoriaClinicaCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-historia-clinica-cadastro-edicao.jpg';
import pmedCadastroClienteAnamnesesExamesFisicosCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-exames-fisicos-cadastro-edicao.jpg';
import pmedCadastroClienteAnamnesesExamesComplementaresCadastroEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-anamneses-exames-complementares-cadastro-edicao.jpg';
import pmedCadastroClienteDiagnosticos from '../../assets/images/pmed/pmed-cadastro-cliente-diagnosticos.jpg';
import pmedCadastroClienteCirurgias from '../../assets/images/pmed/pmed-cadastro-cliente-cirurgias.jpg';
import pmedCadastroClienteCondutas from '../../assets/images/pmed/pmed-cadastro-cliente-condutas.jpg';
import pmedCadastroClienteCondutaAdicaoEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-conduta-adicao-edicao.jpg';
import pmedCadastroClienteCondutaImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-conduta-impresso.jpg';
import pmedCadastroClienteReceitas from '../../assets/images/pmed/pmed-cadastro-cliente-receitas.jpg';
import pmedCadastroClienteReceitaAdicaoEdicao from '../../assets/images/pmed/pmed-cadastro-cliente-receita-adicao-edicao.jpg';
import pmedCadastroClienteReceitaImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-receita-impresso.jpg';
import pmedCadastroClienteCartaoResumoImpresso from '../../assets/images/pmed/pmed-cadastro-cliente-cartao-resumo-impresso.jpg';
import pmedCadastroClienteFichaImpressos from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-impressos.jpg';
import pmedCadastroClienteFichaDadosBasicosHistoriaClinica from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-dados-basicos-historia-clinica.jpg';
import pmedCadastroClienteFichaDiagnosticosCirurgias from '../../assets/images/pmed/pmed-cadastro-cliente-ficha-diagnosticos-cirurgias.jpg';

import pmedCadastroMedicoGeral from '../../assets/images/pmed/pmed-cadastro-medico-geral.jpg';
import pmedCadastroMedicoEnderecos from '../../assets/images/pmed/pmed-cadastro-medico-enderecos.jpg';
import pmedCadastroMedicoCapacitacao from '../../assets/images/pmed/pmed-cadastro-medico-capacitacao.jpg';
import pmedCadastroMedicoAgenda from '../../assets/images/pmed/pmed-cadastro-medico-agenda.jpg';
import pmedCadastroMedicoCarimbo from '../../assets/images/pmed/pmed-cadastro-medico-carimbo.jpg';

import pmedCadastroPessoaFisicaJuridicaGeral from '../../assets/images/pmed/pmed-cadastro-pessoa-fisica-juridica-geral.jpg';
import pmedCadastroPessoaFisicaJuridicaEnderecos from '../../assets/images/pmed/pmed-cadastro-pessoa-fisica-juridica-enderecos.jpg';

import pmedCadastroFrasesPadrao from '../../assets/images/pmed/pmed-cadastro-frases-padrao.jpg';

import pmedCompromissoCadastroEdicao from '../../assets/images/pmed/pmed-compromisso-cadastro-edicao.jpg';
import pmedCompromissosListagens from '../../assets/images/pmed/pmed-compromissos-listagens.jpg';
import pmedCompromissosImpressao from '../../assets/images/pmed/pmed-compromissos-impressao.jpg';
import pmedCompromissosImpressaoHonorarios from '../../assets/images/pmed/pmed-compromissos-impressao-honorarios.jpg';

import pmedCadastroLocalizarFicha from '../../assets/images/pmed/pmed-cadastro-localizar-ficha.jpg';

import pmedListagemCompromissosDiario from '../../assets/images/pmed/pmed-listagem-compromissos-diario.jpg';

import pmedSetup from '../../assets/images/pmed/pmed-setup.jpg';
import pmedSetupDaEstacao from '../../assets/images/pmed/pmed-setup-da-estacao.jpg';
import pmedUsuarios from '../../assets/images/pmed/pmed-usuarios.jpg';
import pmedGruposDePermissoes from '../../assets/images/pmed/pmed-grupos-de-permissoes.jpg';
import pmedInfoBaseDeDados from '../../assets/images/pmed/pmed-info-base-de-dados.jpg';

import pmedCadastroAplicativosExternos from '../../assets/images/pmed/pmed-cadastro-aplicativos-externos.jpg';

import pmedCadastroConvenios from '../../assets/images/pmed/pmed-cadastro-convenios.jpg';
import pmedCadastroDiagnosticosAnatomicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-anatomicos.jpg';
import pmedCadastroDiagnosticosEtiologicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-etiologicos.jpg';
import pmedCadastroDiagnosticosNosologicos from '../../assets/images/pmed/pmed-cadastro-diagnosticos-nosologicos.jpg';
import pmedCadastroDiagnosticosOutros from '../../assets/images/pmed/pmed-cadastro-diagnosticos-outros.jpg';
import pmedCadastroFuncoesDeMedicos from '../../assets/images/pmed/pmed-cadastro-funcoes-de-medicos.jpg';
import pmedCadastroMeiosPagto from '../../assets/images/pmed/pmed-cadastro-meios-pagto.jpg';
import pmedCadastroRamosAtividade from '../../assets/images/pmed/pmed-cadastro-ramos-atividade.jpg';
import pmedCadastroTiposFicha from '../../assets/images/pmed/pmed-cadastro-tipos-ficha.jpg';

import pmedDocumentosAuxiliaresCompartilhados from '../../assets/images/pmed/pmed-documentos-auxiliares-compartilhados.jpg';
import pmedEnderecosParticularesAdicionarLocalizar from '../../assets/images/pmed/pmed-enderecos-particulares-adicionar-localizar.jpg';
import pmedEnderecosParticulares from '../../assets/images/pmed/pmed-enderecos-particulares-adicionar-localizar.jpg';
import pmedEstatisticasCirurgias from '../../assets/images/pmed/pmed-estatisticas-cirurgias.jpg';
import pmedListaTelefonica from '../../assets/images/pmed/pmed-lista-telefonica.jpg';
import pmedRelatoriosFichario from '../../assets/images/pmed/pmed-relatorios-fichario.jpg';

import pmedCadastros from '../../assets/images/pmed/pmed-cadastros.jpg';
import pmedEstatisticas from '../../assets/images/pmed/pmed-estatisticas.jpg';
import pmedListagensCruzadas from '../../assets/images/pmed/pmed-listagens-cruzadas.jpg';
*/

const contentStyleTitle: React.CSSProperties = {
  height: '50px',
  color: '#fff',
  lineHeight: '22px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyleImage: React.CSSProperties = {
  width: '100%',
  height: '100',
};

export default function PClinicCarousel() {
  return (
    <Carousel autoplay>
      {/* <Carousel autoplay effect='fade'> */}
      {/* <Carousel autoplay dots={false}> */}
      {/*<Carousel autoplay effect='fade'> */}
      <div>
        <Row>
          <img style={contentStyleImage} src={pclinAgenda} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaCompromissos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Lista de compromissos</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaProcedimentos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Procedimentos</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaCompromissosGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Compromisso - Dados gerais</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaCompromissosValores}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Compromisso - Valores</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaCompromissosMateriais}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Compromisso - Materias</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinAgendaCompromissosTaxas}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Agenda-Compromisso - Taxas</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadMedicosGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos-Dados gerais</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadMedicosCredenciamento}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos-Credenciamentos</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadMedicosAgenda}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de médicos-Agenda</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadClienteGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes-Dados gerais</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadClienteEnderecos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro de clientes-Endereços</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCadClienteComplemento}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro de clientes-Dados complementares
        </h4>
      </div>
      <div>
        <Row>
          <img style={contentStyleImage} src={pclinCodConvenios} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Códigos de convênios</h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCodPlanosDeAssociados}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Códigos de planos de associados
        </h4>
      </div>
      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCodProcedimentosGeral}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Códigos de procedimentos - Dados gerais
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCodProcedimentosValoresPorConvenio}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Códigos de procedimentos - Valores por convênio
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCodProcedimentosFichaBancada}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Códigos de procedimentos - Ficha de bancada
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinCodProcedimentosFrasesPadrao}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Cadastro - Códigos de procedimentos - Frases padrão
        </h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinContaAReceber} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Conta à receber</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinEstoqueGeral} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Estoque - Dados gerais</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinEstoqueFornecedores}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Estoque - Fornecedores</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinEstoqueDadosAdicionais}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Cadastro - Estoque - Dados adicionais</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinFluxoCaixa} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Fluxo de caixa</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinLaboratorioLaudos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Laboratorio - Laudos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinLaboratorioLaudosHemograma}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Laboratorio - Laudos - Hemograma</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinLaboratorioLaudosHemograma1}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Laboratorio - Laudos - Hemograma</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinLaboratorioLaudosHemograma2}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Laboratorio - Laudos - Hemograma</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinLaboratorioLaudosHemograma3}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Laboratorio - Laudos - Hemograma</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinNotaSaidaGeral} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Nota de Saída - Dados gerais</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinNotaSaidaServicos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Nota de Saída - Serviços</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinNotaSaidaTotais}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Nota de Saída - Totais</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinNotaSaidaCupom} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Nota de Saída - Cupom</h4>
      </div>

      <div>
        <Row>
          <img style={contentStyleImage} src={pclinRelArrecadacao} alt=''></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorio - Arrecadação</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinRelArrecadacaoAgenda}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorio - Arrecadação - Agenda</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinRelArrecadacaoAgendaSumario}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>
          Relatorio - Arrecadação - Agenda - Sumário
        </h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinRelArrecadacaoCidades}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorio - Arrecadação - Cidades</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinRelProcedimentos}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorio - Procedimentos</h4>
      </div>

      <div>
        <Row>
          <img
            style={contentStyleImage}
            src={pclinRelProcedimentosNotas}
            alt=''
          ></img>
        </Row>
        <h4 style={contentStyleTitle}>Relatorio - Procedimentos - Notas</h4>
      </div>
    </Carousel>
  );
}
