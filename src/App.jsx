import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainpage';
import Skull from './pages/skull';

    function App() {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/skull" element={<Skull />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      );
    }

    export default App;