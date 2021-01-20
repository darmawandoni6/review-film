import React from "react";
import { RatingStar } from "rating-star";

import dummy6 from "../../assets/images/narnia.jpg";
const FilmDetail = () => {
  return (
    <div className="bg mb-2 p-2">
      <div className="d-flex w-100">
        <div style={{ width: 185 }}>
          <img src={dummy6} alt="" style={{ width: "100%", height: 230 }} />
          <div className="text-center my-2">
            Rating: 8.0
            <RatingStar rating={8.0} maxScore={10} />
          </div>
        </div>
        <div className="py-3 pl-3 w-100">
          <h1 style={{ fontSize: 22 }}>Narnia</h1>
          <p>
            <span style={{ fontWeight: "bold" }}>Sinopsis : </span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quos voluptatum commodi
            tempora molestias, laboriosam delectus vel voluptates harum. Quas
            libero obcaecati eligendi saepe adipisci? Itaque, iure. Ea dolores
            esse unde?
          </p>
          <ul>
            <li>Type: Movie</li>
            <li>Episode: 1</li>
            <li>Statu: Movie</li>
            <li>Status: Completed</li>
            <li>Genres: Comedy, Drama</li>
            <li>Skor : 7.54</li>
            <li>Rilis : 2020</li>
          </ul>
          <p>
            <span style={{ fontWeight: "bold" }}>Review Penulis : </span> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum
            commodi tempora molestias, laboriosam delectus vel voluptates harum.
            Quas libero obcaecati eligendi saepe adipisci? Itaque, iure. Ea
            dolores esse unde? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui vel voluptate incidunt dignissimos doloribus
            exercitationem, minus itaque voluptates culpa aperiam possimus
            quibusdam molestias dolore tempora vero officiis. <br />
            Inventore, ratione blanditiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam libero, id expedita
            consequatur rerum, quod amet dolorum aliquam nihil dolore fuga
            mollitia nostrum tenetur dolores maxime repellendus minus ad?
            Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam libero, id expedita consequatur rerum, quod amet dolorum
            aliquam nihil dolore fuga mollitia nostrum tenetur dolores maxime
            repellendus minus ad? Temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
