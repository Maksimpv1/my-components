import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./app/components/home/Home";
import './index.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
