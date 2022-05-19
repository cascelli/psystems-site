import { Table } from 'antd';
import { useEffect } from 'react';
import UrlLinkService from '../../sdk/services/UrlLink.service';
//import UrlLinkService from '../../sdk/services/UrlLink.service';

export default function SitesList() {
  // useEffect(() => {
  //   const sites = UrlLinkService.getAllUrlLinks();
  //   console.log(sites);
  // }, []);

  const links = UrlLinkService.getAllUrlLinksFromJsonFile();

  /*
  useEffect(() => {
    const links =
      UrlLinkService.getAllUrlLinksFromJsonFile();

    // console.log('URLS : ', links);
    // console.log('typeof URLS: ', typeof links);

    // console.log('Links : ');



    // console.log(
    //   'link 0 :',
    //   links[0].id,
    //   links[0].url,
    //   links[0].description
    // );


    
    // for (let i = 0; i < links.length; i++) {
    //   console.log(
    //     links[i].id,
    //     ' | ',
    //     links[i].url,
    //     ' | ',
    //     links[i].description
    //   );
    // }
    

    //console.log('URLS JSON: ', JSON.parse(links));
    //links.map((item) =>
    //  console.log(item.id, item.url, item.descricao)
    //);
    //var myLinks = JSON.parse(links);
    //console.log('myLinks : ', myLinks);

  }, []);
  */

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      //key: 'id',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      //key: 'url',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      //key: 'description',
    },
  ];

  return (
    <div>
      <Table dataSource={links} columns={columns} rowKey='id' />
    </div>
  );
}
