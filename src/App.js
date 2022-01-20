import Title from './components/Title';
import DatePicker from './components/DatePicker';
import Spinner from './components/Spinner';
import PictureInformation from './components/PictureInformation';
import useFetch from './hooks/useFetch';
import { apodUrl } from './utils/constants';
import { useState } from 'react';

const App = () => {
  const dateObject = new Date();
  const isoDate = dateObject.toISOString().split('T')[0];
  const [date, setDate] = useState(() => isoDate);
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${apodUrl}?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`,
    {},
    date,
    null
  );

  if (error) {
    return <h3>There was an error.</h3>;
  }

  const updateDate = (newDate) => {
    setDate(() => newDate);
  };

  return (
    <>
      <Title />
      <DatePicker date={date} updateDate={updateDate} />
      {loading ? <Spinner /> : <PictureInformation pictureData={data} />}
    </>
  );
};

export default App;
