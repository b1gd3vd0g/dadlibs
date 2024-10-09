// Import react stuff.
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all the pages that we need to route to!
import FourOhFour from './pages/404';
import HomePage from './pages/home';
import Library from './pages/library';
import Login from './pages/login';
import SignUp from './pages/sign_up';
import TemplateCreator from './pages/template_creator';

import './app.css';

const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/create'
              element={<TemplateCreator />}
            />
            <Route
              path='/library'
              element={<Library />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<SignUp />}
            />
            <Route
              path='*'
              element={<FourOhFour />}
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;

export { UserContext };
