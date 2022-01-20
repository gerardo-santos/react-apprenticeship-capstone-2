import { useState, useEffect } from 'react';

const useFetch = (url, options, dependency, filterFunc) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const responseJson = await response.json();
        if (filterFunc) {
          const filteredResponse = filterFunc(responseJson);
          setData(filteredResponse);
        } else {
          setData(responseJson);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [dependency]);
  return { loading, error, data };
};

export default useFetch;
