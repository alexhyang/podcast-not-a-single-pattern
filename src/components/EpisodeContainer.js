import React from "react";
import Episode from "./Episode";

const episodes = [1, 2, 3, 4, 5, 6];
const episodeList = episodes.map((num) => <Episode key={num} id={num} />);

function EpisodeContainer(props) {
  return <div className="episode-container row row-cols-3 g-3">{episodeList}</div>;
}

export default EpisodeContainer;
