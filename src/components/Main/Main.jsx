import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Routes, Route} from 'react-router-dom';
import Modal from '../Modal';
import Homepage from './Homepage';
import Error404 from './Error404';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth' element={<Homepage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Layout>
  </main>
);
