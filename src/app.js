import React from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Currencies />
      </div>
    </div>
  );
};

export default App;
