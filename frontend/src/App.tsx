import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './components/styles/Global.style';
import MainContainer from './components/MainContainer';
import ShoesPage from './components/pages/ShoesPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/lx1">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/shoes" element={<ShoesPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
