import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./components/header"
import Footer from "./components/footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Home page Content
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));