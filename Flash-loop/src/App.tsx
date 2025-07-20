import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddWord from './page/AddWord';
import ReviewWords from './page/ReviewWords';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/add">เพิ่มคำศัพท์</Link> | <Link to="/review">ทบทวนคำศัพท์</Link>
      </nav>
      <Routes>
        <Route path="/add" element={<AddWord />} />
        <Route path="/review" element={<ReviewWords />} />
      </Routes>
    </Router>
  );
}

export default App;
