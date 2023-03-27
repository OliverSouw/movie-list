import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";

const Root = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="Root">
      <Header onSubmit={ (inputValue) => setSearchValue(inputValue) } />
      <Routes>
        <Route path="/" element={ <Home searchValueProp={ searchValue }/> } />
        <Route path="/movie/:movieId" element={ <MovieDetail /> } />
      </Routes>
    </div>
  )
}

export default Root