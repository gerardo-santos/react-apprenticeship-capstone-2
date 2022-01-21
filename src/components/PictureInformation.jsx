import VideoEmbed from './VideoEmbed';
import PropTypes from 'prop-types';

const PictureInformation = ({ pictureData }) => {
  return (
    <div className="picture-info-container">
      <div className="pic-container">
        <h1 className="picture-title">{pictureData.title}</h1>
        {pictureData.media_type === 'image' ? (
          <img className="pic" src={pictureData.url} alt="pic-of-the-day" />
        ) : (
          <VideoEmbed videoUrl={pictureData.url} />
        )}
      </div>
      <div className="description-container">
        <p>{pictureData.date}</p>
        <p className="picture-explanation">{pictureData.explanation}</p>
        {pictureData.copyright && (
          <p>Credit & copyright: {pictureData.copyright}</p>
        )}
      </div>
    </div>
  );
};

PictureInformation.propTypes = {
  pictureData: PropTypes.object,
};

export default PictureInformation;
