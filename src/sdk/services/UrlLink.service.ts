import Service from '../Service';
import { UrlLink } from '../@types/UrlLink';

class UrlLinkService extends Service {
  static getAllUrlLinks() {
    // todo: substituir a chamada Http.get pela leitura do arquivo json
    //       de dados da pagina assets/dados/urlsLinks.txt
    return (
      this.Http.get<UrlLink.Summary>('/url-links')
        //.then((res) => res.data);
        .then(this.getData)
    );
  }
}

export default UrlLinkService;
