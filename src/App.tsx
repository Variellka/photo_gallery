import { Routes, Route, Navigate } from "react-router";
import { GalleryPage, LoginPage } from "./pages";
import './App.scss'
import { useSelector } from "react-redux";
import { authActions, selectAuthDataInited, selectCurrentUser } from "./features/Authentication/model/slice/authSlice";
import { useAppDispatch } from "./shared/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";

function App() {
    const user = useSelector(selectCurrentUser)
    const authDataInited = useSelector(selectAuthDataInited)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authActions.initAuthData())
    }, [dispatch])

    return (
        <div className="App">
            {authDataInited && 
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route 
                    path="/gallery" 
                    element={
                        user  ? (<GalleryPage/>) : (<Navigate to="/login" replace />)
                    }
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>} 
        </div>
    );
}

export default App;
