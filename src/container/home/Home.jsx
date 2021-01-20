import React from "react";
import TopTent from "./components/TopTent";
import SinglePage from "../../layout/SinglePage";
import ListFilm from "./components/ListFilm";

const Home = () => {
  return (
    <div>
      <SinglePage>
        <TopTent />
        <ListFilm />
      </SinglePage>
    </div>
  );
};

export default Home;
