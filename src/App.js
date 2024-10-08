import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from './routes';
import Home from './pages/home';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import Simulation from './pages/simulation';
import Theory from './pages/theory';
import B1 from './pages/b1';
import B2 from './pages/b2';
import C from './pages/c';
import Upgrade from './pages/upgrade';

import './App.scss';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import Process from './pages/process';

function App() {
  return (
    <div className='app-page'>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path={PATHS.HOME} Component={Home} />
            <Route path={PATHS.PROCESS} Component={Process} />
            <Route path={PATHS.SIMULATION} Component={Simulation} />
            <Route path={PATHS.THEORY} Component={Theory} />
            <Route path={PATHS.B1} Component={B1} />
            <Route path={PATHS.B2} Component={B2} />
            <Route path={PATHS.C} Component={C} />
            <Route path={PATHS.UPGRADE} Component={Upgrade} />
          </Routes>
        </Body>
        <Footer />
      </BrowserRouter>
      <Button
        className='btn-scroll-top'
        type="default"
        size='large'
        icon={<ArrowUpOutlined />}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
