import React from "react";
import { useHistory } from "react-router-dom";
import SinglePage from "../../../layout/SinglePage";
import ListFilmTabel from "./ListFilmTabel";

const ListFilm = () => {
  const history = useHistory();

  return (
    <SinglePage>
      <div className="row h-100 bg">
        <div className="col-12 p-2">
          <div className="d-flex justify-content-between">
            <button className="btn" onClick={() => history.goBack()}>
              <i className="fas fa-arrow-left mr-2"></i>Back
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus mr-2"></i>Add Review
            </button>
          </div>
        </div>
        <div className="col-12">
          <h2>List Film</h2>
          <ListFilmTabel />
        </div>
      </div>
    </SinglePage>
  );
};

export default ListFilm;

const style = {
  poster: {
    width: 220,
    height: 325,
  },
};
