import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/LoginPage/login";
import Register from "./components/RegisterPage/register";

function App() {
  return (
    // <div className="App">
    //     <Login/>
    // </div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
