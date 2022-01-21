import Title from './components/Title';
import DatePicker from './components/DatePicker';
import Spinner from './components/Spinner';
import ErrorAlert from './components/ErrorAlert';
import PictureInformation from './components/PictureInformation';
import useFetch from './hooks/useFetch';
import { apodUrl } from './utils/constants';
import { useState } from 'react';

const App = () => {
  const [date, setDate] = useState(() => {
    const dateObject = new Date();
    const isoDate = dateObject.toISOString().split('T')[0];
    return isoDate;
  });
  const [search, setSearch] = useState('');
  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${apodUrl}?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`,
    {},
    search,
    null
  );

  const updateDate = (newDate) => {
    setDate(() => newDate);
  };

  const updateSearch = (newSearch) => {
    setSearch(() => newSearch);
  };

  return (
    <>
      <Title />
      <DatePicker
        date={date}
        updateDate={updateDate}
        updateSearch={updateSearch}
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorAlert error={error} />
      ) : (
        <PictureInformation pictureData={data} />
      )}
    </>
  );
};

export default App;
