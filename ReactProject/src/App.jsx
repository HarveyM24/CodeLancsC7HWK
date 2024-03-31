import { Routes, Route } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';


function App() {
  return (
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  )
}

export default App