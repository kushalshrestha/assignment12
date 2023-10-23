import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header/Header";
import PageRoutes from "./components/common/PageRoutes";


function App() {
  return (
    <>
      <div className="container mt-5">
        <BrowserRouter>
          <div>
            <div className="fixed top-0 left-0 right-0 z-10">
              <Header />
            </div>
            <div className="py-20">
              <PageRoutes />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
