import Home from "./pages/Home";
import Tvseries from './pages/Tvseries'
import Movies from './pages/Movies'
import Popular from './pages/Popular'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="">
                {/* Defining Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tvseries" element={<Tvseries />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/popular" element={<Popular />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
