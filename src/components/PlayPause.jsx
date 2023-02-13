import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      onClick={handlePause}
      size={35}
      className="text-gray-300 cursor-pointer"
    />
  ) : (
    <FaPlayCircle
      onClick={handlePlay}
      size={35}
      className="text-gray-300 cursor-pointer"
    />
  );
};

export default PlayPause;
