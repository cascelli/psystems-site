import Service from '../Service';
import { UrlLink } from '../@types/UrlLink';

class UrlLinkService extends Service {
  //OBS: Para dados simples, usar variaveis de ambiente no arquivo .env do projeto
  //     Em seguida, defina uma constante que referencia o valor armazernado na mesma
  //     EX: REACT_APP_URLS_LINKS = [conteúdo a ser armazenado]
  //     EX: const APP_URLS_LINKS = process.env.REACT_APP_URLS_LINKS;

  static getAllUrlLinks() {
    // todo: substituir a chamada Http.get pela leitura do arquivo json
    //       de dados da pagina assets/dados/urlsLinks.txt
    return (
      this.Http.get<UrlLink.Summary>('/url-links')
        //.then((res) => res.data);
        .then(this.getData)
    );
  }

  static getAllUrlLinksFromJsonFile() {
    // todo: substituir a chamada Http.get pela leitura do arquivo json
    //       de dados da pagina assets/dados/urlsLinks.txt
    //return (
    //  this.Http.get<UrlLink.Summary>('/url-links')
    //    //.then((res) => res.data);
    //    .then(this.getData)
    //);

    //const jsonData = fetch(

    const jsonData = require('../../assets/dados/urlsLinks.json');
    //console.log('Funcao require : dados ', jsonData);
    return jsonData;

    /*
    fetch('../../assets/dados/urlsLinks.json')
      .then((response) => {
        //console.log('urlsLinks : ', response.json());
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
    //console.log('urlsLinks : ', jsonData);
    //return jsonData.json
    */
  }
}

export default UrlLinkService;
