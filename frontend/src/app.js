import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FourOhFour from './404';
import HomePage from './home_page';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='*'
            element={<FourOhFour />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
