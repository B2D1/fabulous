import { routerConfig } from "@routes/route.config";
import AutoRouter from "@components/AutoRouter";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return <Router>{AutoRouter(routerConfig)}</Router>;
}

export default App;
