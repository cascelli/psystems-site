// export default function Clientes() {
//   return <div>ToDo: Clientes - Feature</div>;
// }

import { Table } from 'antd';
import { useEffect } from 'react';
import ClienteService from '../../sdk/services/Cliente.service';
//import UrlLinkService from '../../sdk/services/UrlLink.service';

export default function Clientes() {
  // useEffect(() => {
  //   const clientes = ClienteService.getAllClientes();
  //   console.log(clientes);
  // }, []);

  const clientes = ClienteService.getAllClientesFromJsonFile();

  /*
  useEffect(() => {
    const clientes =
      ClienteService.getAllClientesdFromJsonFile();

    // console.log('Clientes : ', clientes);
    // console.log('typeof Clientesd: ', typeof clientes);

    // console.log('Clientes : ');



    // console.log(
    //   'clientes 0 :',
    //   clientes[0].id,
    //   clientes[0].url,
    //   clientes[0].description
    // );


    
    // for (let i = 0; i < clientes.length; i++) {
    //   console.log(
    //     clientes[i].id,
    //     ' | ',
    //     clientes[i].url,
    //     ' | ',
    //     clientes[i].description
    //   );
    // }
    

    //console.log('Clientes JSON: ', JSON.parse(clientes));
    //clientes.map((item) =>
    //  console.log(item.id, item.url, item.descricao)
    //);
    //var myClientes = JSON.parse(clientes);
    //console.log('myClientes : ', myClientes);

  }, []);
  */

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      //key: 'id',
    },
    // {
    //   title: 'URL',
    //   dataIndex: 'url',
    //   //key: 'url',
    // },
    {
      title: 'Cliente',
      dataIndex: 'description',
      //key: 'description',
    },
  ];

  return (
    <div>
      <Table dataSource={clientes} columns={columns} rowKey='id' />
    </div>
  );
}
