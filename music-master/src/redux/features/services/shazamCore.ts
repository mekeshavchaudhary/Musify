import { MySongData, SongProps } from "../../../models/types";

const APIKEY : string = '2f577a0931mshd45b5fc74fc5e2bp191cf2jsn5d58c696cbe1';

export async function fetchShazam() {
  const headers = {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
  };

  const response = await fetch(
    "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export async function getSongInfo(songId: string): Promise<MySongData> {
  const url = `https://shazam-core7.p.rapidapi.com/songs/get_details?id=${songId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data: MySongData = result;
    return data;
  } catch (error) {
    throw new Error('Failed to get song details');  }
}

export async function allSongDetails() {
  const rr = await fetchShazam();
  let rrr = rr.slice(0, 2);
  let myDumbArray = Array();
  // return rr;
  rrr.forEach((song: SongProps) => {

    getSongInfo(song.key)
      .then((songData: MySongData) => {
        console.log(songData.images.coverart);
        let _temp = {
          title : songData.alias,
          artist : songData.artists[0].alias,
          photo_url : songData.images.coverart
        }
        myDumbArray.push(_temp);

      })
      .catch((error) => {
        console.error(error);
      });

  });
  return myDumbArray;
}
