import { Routes, Route, Navigate } from "react-router";
import { GalleryPage, LoginPage } from "./pages";
import './App.scss'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./features/Authentication/model/slice/authSlice";

function App() {
    const user = useSelector(selectCurrentUser)

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route 
                    path="/gallery" 
                    element={
                        user ? (<GalleryPage/>) : (<Navigate to="/login" replace />)
                    }
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </div>
    );
}

export default App;
