import { Route, Switch } from 'react-router-dom';
import PortfolioPage from './pages/AllProjects';
import ContactPage from './pages/Contact';
import ResumePage from './pages/Resume';
import Layout from './components/layout/Layout';
import AboutMe from './pages/AboutMe';

function App() {
  return (<Layout>

    <Switch>
      <Route path='/' exact><AboutMe/>
      </Route>
      <Route path='/about'><AboutMe/>
      </Route>
      <Route path='/portfolio' exact>
        <PortfolioPage />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/resume'>
        <ResumePage />
      </Route>
      </Switch>

  </Layout>)
}

export default App;
