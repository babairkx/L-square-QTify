import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Desktop1 from "./pages/desktop1/Desktop1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Desktop1 /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
