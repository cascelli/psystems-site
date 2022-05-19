import Service from '../Service';
import { Cliente } from '../@types/Cliente';

class ClienteService extends Service {
  //OBS: Para dados simples, usar variaveis de ambiente no arquivo .env do projeto
  //     Em seguida, defina uma constante que referencia o valor armazernado na mesma
  //     EX: REACT_APP_URLS_LINKS = [conteúdo a ser armazenado]
  //     EX: const APP_URLS_LINKS = process.env.REACT_APP_URLS_LINKS;

  static getAllClientes() {
    return (
      this.Http.get<Cliente.Summary>('/clientes')
        //.then((res) => res.data);
        .then(this.getData)
    );
  }

  static getAllClientesFromJsonFile() {
    // todo: substituir a chamada Http.get pela leitura do arquivo json
    //       de dados da pagina assets/dados/clientes.json
    //return (
    //  this.Http.get<Cliente.Summary>('/clientes')
    //    //.then((res) => res.data);
    //    .then(this.getData)
    //);

    //const jsonData = fetch(

    const jsonData = require('../../assets/dados/clientes.json');
    //console.log('Funcao require : dados ', jsonData);
    return jsonData;

    /*
    fetch('../../assets/dados/clientes.json')
      .then((response) => {
        //console.log('clientes : ', response.json());
        //return response.json();
        console.log(
          'Cheguei aqui : response => ',
          response.json()
        );
        return response;
      })
      .then((jsondata) =>
        console.log('JSON_Data: ', jsondata)
      );
    //console.log('clientes : ', jsonData);
    //return jsonData.json
    */
  }
}

export default ClienteService;
