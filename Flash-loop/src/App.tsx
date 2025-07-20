import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddWord from './page/AddWord';
import ReviewWords from './page/ReviewWords';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/FlashLoop/">Home</Link> | <Link to="/FlashLoop/add">เพิ่มคำศัพท์</Link> | <Link to="/FlashLoop/review">ทบทวนคำศัพท์</Link>
      </nav>
      <Routes>
        <Route path="/FlashLoop/" element={
          <>
            <h1>Welcome to Home page</h1>
          </>
        } />
        <Route path="/FlashLoop/add" element={<AddWord />} />
        <Route path="/FlashLoop/review" element={<ReviewWords />} />
      </Routes>
    </Router>
  );
}

export default App;
