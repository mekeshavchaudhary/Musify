import React from "react";
import "./card.css";
import { CardProp } from "../models/types";

interface SongCardProps {
  song: CardProp;
}

const Card = ({ song }:  SongCardProps) => {
  const { title, artist, photo_url } = song;

  return (
    <div className="card-h">
      <div className="card style">
        <img
          src={photo_url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="bg-success list-group list-group-flush">
          <li className="list-group-item">{artist}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
