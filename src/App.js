import React, {useState} from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./utils";

function App() {
const [songs, setSongs] = useState(data);
const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div>
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
