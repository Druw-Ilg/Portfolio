import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens
import Home from "./screens/Home";
import Work from "./screens/Work";
import Contact from "./screens/Contact";
import Reviews from "./screens/Reviews";

//********************************** */

import Movilib from "./components/Movilib";
import FidelleTech from "./components/FidelleTech";
import Triveho from "./components/Triveho";
import Cinch from "./components/Cinch";
import Lia from "./components/Lia";
import MyBank from "./components/MyBank";
import CyberSynopsis from "./components/CyberSynopsis";
import Playstation from "./components/Playstation";
import Aseat from "./components/Aseat";
import ETSAkombi from "./components/ETSAkombi";
import Foodie from "./components/Foodie";
import Frango from "./components/Frango";

//script function

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movilib" element={<Movilib />} />
          <Route path="/fidelle-tech" element={<FidelleTech />} />
          <Route path="/triveho" element={<Triveho />} />
          <Route path="/cinch" element={<Cinch />} />
          <Route path="/lia-sa" element={<Lia />} />
          <Route path="/cyberSynopsis" element={<CyberSynopsis />} />
          <Route path="/my-bank" element={<MyBank />} />
          <Route path="/playstation" element={<Playstation />} />
          <Route path="/etsakombi" element={<ETSAkombi />} />
          <Route path="/Foodie" element={<Foodie />} />
          <Route path="/Frango" element={<Frango />} />
          <Route path="/aseat" element={<Aseat />} />
        </Routes>
      </Router>

      {AddLibrary("/lib/main.js")}
    </div>
  );
}

export default App;
