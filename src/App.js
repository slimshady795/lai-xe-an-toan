import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from './routes';
import Home from './pages/home';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import Introduction from './pages/introduction';
import Simulation from './pages/simulation';
import B1 from './pages/b1';
import B2 from './pages/b2';
import C from './pages/c';
import Upgrade from './pages/upgrade';

import './App.scss';

function App() {
  return (
    <div className='app-page'>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path={PATHS.HOME} Component={Home} />
            <Route path={PATHS.INTRODUCTION} Component={Introduction} />
            <Route path={PATHS.SIMULATION} Component={Simulation} />
            <Route path={PATHS.B1} Component={B1} />
            <Route path={PATHS.B2} Component={B2} />
            <Route path={PATHS.C} Component={C} />
            <Route path={PATHS.UPGRADE} Component={Upgrade} />
          </Routes>
        </Body>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
