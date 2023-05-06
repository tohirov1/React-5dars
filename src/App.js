import { useState } from "react";
import "./Assets/main.css"
import Leson52 from "./components/Lesson52/Leson52";
import { BrowserRouter,Routes,Rote, Route } from "react-router-dom";
import Detail from "./components/NewsLateDetial/Detail";

export default function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={  <Leson52/>}/>
      <Route path="/artcil/:id" element={<Detail/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}
