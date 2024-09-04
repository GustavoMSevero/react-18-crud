import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Shared/Layout';
import AllFruits from './pages/AllFruits';
import AddFruit from './pages/AddFruit';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits />}></Route>
        <Route path="/add-fruit" element={<AddFruit />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
