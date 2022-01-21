import spinner from '../assets/bluespinner.gif';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
