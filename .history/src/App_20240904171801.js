import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Shared/Layout';
import AllFruits from './pages/AllFruits';
import AddFruit from './pages/AddFruit';
import UpdateFruit from './pages/UpdateFruit';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits />}></Route>
        <Route path="/add-fruit" element={<AddFruit />}></Route>
        <Route path="/update-fruit" element={<UpdateFruit/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
