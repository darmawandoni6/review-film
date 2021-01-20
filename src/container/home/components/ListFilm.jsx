import React from "react";
import Router, { useHistory } from "react-router-dom";

import dummy1 from "../../../assets/images/Iron_Man_3_poster.jpg";
import dummy2 from "../../../assets/images/avenger-2.jpg";
import dummy3 from "../../../assets/images/avenger-3.jpg";
import dummy4 from "../../../assets/images/avenger.jpg";
import dummy5 from "../../../assets/images/batman.jpg";
import dummy6 from "../../../assets/images/narnia.jpg";
import { Card } from "reactstrap";

const randomPoster = () => {
  const rd = Math.floor(Math.random() * 6);
  switch (rd) {
    case 0:
      return dummy1;
    case 1:
      return dummy2;
    case 2:
      return dummy3;
    case 3:
      return dummy4;
    case 4:
      return dummy5;
    case 5:
      return dummy6;
    default:
      return dummy1;
  }
};

const ListFilm = () => {
  const history = useHistory();

  const renderList = () => {
    const result = [];

    for (let index = 0; index < 14; index++) {
      result.push(
        <Card>
          <div
            className=" mx-1 mb-2"
            style={{ position: "relative", maxWidth: 145, cursor: "pointer" }}
            onClick={() => history.push("/film/1")}
          >
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.type}>Movie</div>
            <div
              className="text-center"
              style={{
                color: "#333",
                fontSize: "0.95rem",
                fontWeight: 600,
                maxHeight: 45,
                overflow: "hidden",
              }}
            >
              Dummy DummyDummy DummyDummy (2020)
            </div>
          </div>
        </Card>
      );
    }
    return result;
  };
  return (
    <div className="p-2 mb-2 bg">
      <div
        className="py-2 px-3 mb-2"
        style={{ backgroundColor: "#280096", color: "white", fontWeight: 600 }}
      >
        List
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {renderList()}
      </div>
      <div className="my-2 text-center">
        <button className="btn btn-primary px-3">Next</button>
      </div>
    </div>
  );
};

export default ListFilm;

const style = {
  poster: {
    width: 145,
    height: 215,
  },
  ket: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0000002b",
    backgroundImage: "linear-gradient(transparent, #3c3c3b)",
    color: "white",
    padding: " 12px 24px",
    boxShadow: "0px -12px 27px -17px rgba(0,0,0,1)",
  },
  type: {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: 12,
    padding: "2px 5px",
    lineHeight: "normal",
    borderRadius: 3,
    color: "white",
    background: "#9c27b0",
  },
};
