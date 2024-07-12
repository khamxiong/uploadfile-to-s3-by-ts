import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpLoadPage from "./pages/UPLoadPage";
import AnsWer from "./pages/AnsWer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UpLoadPage />} />
        <Route path="/answer" element={<AnsWer />} />
      </Routes>
    </Router>
  );
}

export default App;
