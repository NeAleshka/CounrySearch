import React from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import {BrowserRouter,Route, Routes} from "react-router-dom";


function App() {


    return (
        <BrowserRouter>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/country/:countyName'} element={<Details/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default App;
