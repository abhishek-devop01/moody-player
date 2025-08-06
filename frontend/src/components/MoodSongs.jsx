import { useState } from "react";

const MoodSongs = ({ Songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };
  return (
    <div className="mood-songs text-zinc-300 flex flex-col items-center gap-10 mt-10 w-full">
      <h2 className="text-5xl font-bold">Recommended Songs</h2>
      {Songs.map((song, index) => (
        <div className="song flex justify-around w-full" key={index}>
          <div className="title text-xl">
            <h3>{song.title}</h3>
            <p className="font-thin text-sm">{song.artist}</p>
          </div>
          <div className="play-pause-button">
            {

              isPlaying === index &&
              <audio
                src={song.audio}
                autoPlay={isPlaying === index}
                style={{
                  display: "none",
                }}
              ></audio>
            }

            <button onClick={() => handlePlayPause(index)}>
              {isPlaying === index ? (
                <i className="ri-pause-circle-fill"></i>
              ) : (
                <i className="ri-play-circle-fill"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
