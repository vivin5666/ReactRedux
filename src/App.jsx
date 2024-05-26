import React from "react";
import Cards from "./components/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./contextData/UserContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid my-5">
      <UserContext>
        <Cards />
      </UserContext>
      <Footer />
    </div>
  );
}

export default App;