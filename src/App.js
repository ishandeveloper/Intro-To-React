import React from "react";
import Card from "./components/card";

function App() {
  return (
    <div className="wrapper">
      <Card username="ben" />
      <Card username="ishandeveloper" />
      <Card username="graciegregory" />
    </div>
  );
}

export default App;
