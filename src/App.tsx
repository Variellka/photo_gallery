import { Routes, Route, Navigate } from "react-router";
import { GalleryPage, LoginPage } from "./pages";
import './App.scss'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </div>
    );
}

export default App;
