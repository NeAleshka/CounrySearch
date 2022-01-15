import React from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Controls from "./Components/Controls";

function App() {
  return (
      <>
        <Header/>
        <Main>
            <Controls/>
        </Main>
      </>

  );
}

export default App;
