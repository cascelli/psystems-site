// Usando em packages.json o pacote react-router-dom :
// dependencies => react-router-dom na versao 5.2.0
// devDependencies => @Types/react-router-dom na versao 5.1.8
import {
  // BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomeView from './views/Home.view';
import SiteListView from './views/SiteList.view';
import UserCreateView from './views/UserCreate.view';
import UserListView from './views/UserList.view';
import AtuacaoView from './views/Atuacao.view';
import ContatoView from './views/Contato.view';
import ClientesView from './views/Clientes.view';
import PApptsView from './views/PAppts.view';
import PMedView from './views/PMed.view';
import PClinicView from './views/PClinic.view';
import PPackView from './views/PPack.view';
import PProcView from './views/PProc.view';
import PFAView from './views/PFA.view';
import AutoCondView from './views/AutoCond.view';
import PContView from './views/PCont.view';
import EmpVirtualView from './views/EmpVirtual.view';

export default function Routes() {
  return (
    // <BrowserRouter> // transferido para src/index.tsx para evitar erro
    <Switch>
      <Route path={'/'} exact component={HomeView} />
      <Route path={'/usuarios/cadastro'} exact component={UserCreateView} />
      <Route path={'/usuarios'} exact component={UserListView} />

      <Route path={'/sites'} exact component={SiteListView} />
      <Route path={'/atuacao'} exact component={AtuacaoView} />
      <Route path={'/aplicativos/pappts'} exact component={PApptsView} />
      <Route path={'/aplicativos/pmed'} exact component={PMedView} />
      <Route path={'/aplicativos/pclinic'} exact component={PClinicView} />
      <Route path={'/aplicativos/ppack'} exact component={PPackView} />
      <Route path={'/aplicativos/pproc'} exact component={PProcView} />
      <Route path={'/aplicativos/pfa'} exact component={PFAView} />
      <Route path={'/aplicativos/autocond'} exact component={AutoCondView} />
      <Route
        path={'/aplicativos/empvirtual'}
        exact
        component={EmpVirtualView}
      />
      <Route path={'/aplicativos/pcont'} exact component={PContView} />
      <Route path={'/clientes'} exact component={ClientesView} />
      <Route path={'/contato'} exact component={ContatoView} />
    </Switch>
    // </BrowserRouter>
  );
}
