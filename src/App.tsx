import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./App.route";

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<h4>Loading Page...</h4>}>
        <Routers />
      </Suspense>
    </Router>     
    </>
  );
}

export default App;
