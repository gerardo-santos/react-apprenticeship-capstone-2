import VideoEmbed from './VideoEmbed';
import PropTypes from 'prop-types';
import ErrorAlert from '../components/ErrorAlert';

const PictureInformation = ({ pictureData, error }) => {
  if (error) return <ErrorAlert error={error} />;
  return (
    <div className="picture-info-container">
      {pictureData && (
        <>
          <div className="pic-container">
            <h1 className="picture-title">{pictureData.title}</h1>
            {pictureData.media_type === 'image' ? (
              <img className="pic" src={pictureData.url} alt="pic-of-the-day" />
            ) : (
              <VideoEmbed videoUrl={pictureData.url} />
            )}
          </div>
          <div className="description-container">
            <p title="pic-date">{pictureData.date}</p>
            <p className="picture-explanation" title="explanation">
              {pictureData.explanation}
            </p>
            {pictureData.copyright && (
              <p>Credit & copyright: {pictureData.copyright}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

PictureInformation.propTypes = {
  pictureData: PropTypes.object,
  error: PropTypes.object,
};

export default PictureInformation;
