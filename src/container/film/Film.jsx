import React from "react";
import SinglePage from "../../layout/SinglePage";
import FilmDetail from "./FilmDetail";

const Film = () => {
  return (
    <SinglePage>
      <div
        className="border p-2 bg mb-2"
        style={{ fontWeight: 600, fontSize: 12 }}
      >
        Narnia
      </div>
      <FilmDetail />
    </SinglePage>
  );
};

export default Film;
