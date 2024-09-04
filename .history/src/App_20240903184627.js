import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Shared/Layout';
import AllFruits from './pages/AllFruits';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
