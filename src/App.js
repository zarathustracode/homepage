import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeuralResponse from "./pages/NeuralResponse";
import Homeaostasis from "./pages/Homeaostasis";
import Graphs from "./pages/Graphs";
import Correlations from "./pages/Correlations";
import Learning from "./pages/Learning";
import SignIn from "./pages/SignIn";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neural-response" element={<NeuralResponse />}/>
          <Route path="/homeostasis" element={<Homeaostasis />}/>
          <Route path="/graphs" element={<Graphs />}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="/correlations" element={<Correlations />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
