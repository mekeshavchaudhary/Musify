import React, { Suspense, useEffect, useState } from "react";
import Card from "./card";
import "./home.css";
import {
  allSongDetails,
  fetchShazam,
} from "../redux/features/services/shazamCore";
import { CardProp } from "../models/types";

type Props = {};

async function fetchShazamData() {
  const allSongs = await fetchShazam(); 
  return allSongs;
}

const Home =(props: Props) => {
  let aa = allSongDetails();
  return (
    <div className="">
      <h1 className="heading">Home</h1>
      <div className="card-holder-my">
        <section className="">
          <div className="">
            home
            {/* {(await aa)?.map((song: CardProp) => (
              <Card song={song} />
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
