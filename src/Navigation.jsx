import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="goit-react-hw-08-phonebook/" element={<Login />}></Route>
        <Route
          path="goit-react-hw-08-phonebook/login"
          element={<Login />}
        ></Route>
        <Route
          path="goit-react-hw-08-phonebook/contacts"
          element={<App />}
        ></Route>
        <Route
          path="goit-react-hw-08-phonebook/register"
          element={<Register />}
        ></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
