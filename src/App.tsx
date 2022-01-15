import React from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Controls from "./Components/Controls/Controls";

function App() {
    return (
        <div>
            <Header/>
            <Main>
                <Controls/>
            </Main>
        </div>
    );
}

export default App;
