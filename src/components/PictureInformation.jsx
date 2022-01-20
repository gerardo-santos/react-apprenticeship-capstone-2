import PropTypes from 'prop-types';

const PictureInformation = ({ pictureData }) => {
  return (
    <div className="picture-info-container">
      <h1 className="picture-title">{pictureData.title}</h1>
      <img className="pic" src={pictureData.url} alt="pic-of-the-day" />
      <p>Picture date: {pictureData.date}</p>
      <p className="picture-explanation">{pictureData.explanation}</p>
      {pictureData.copyright && (
        <p>Image credit & copyright: {pictureData.copyright}</p>
      )}
    </div>
  );
};

PictureInformation.propTypes = {
  pictureData: PropTypes.object,
};

export default PictureInformation;
