import GlobalStyle from "./components/GlobalStyle";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";

export default function App() {
  const [nome, setNome] = useState("");
  const [token, setToken] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ nome, setNome, token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
