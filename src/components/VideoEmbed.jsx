import PropTypes from 'prop-types';

const VideoEmbed = ({ videoUrl }) => (
  <div className="video-container">
    <iframe
      width="853"
      height="480"
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
    />
  </div>
);

VideoEmbed.propTypes = {
  videoUrl: PropTypes.string,
};

export default VideoEmbed;
