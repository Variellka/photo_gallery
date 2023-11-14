import { Routes, Route } from "react-router";
import { GalleryPage, LoginPage } from "./pages";
import './App.scss'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
