import { useState, useEffect } from 'react';
import yelp from '../utils/API/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const defaultSearchTerm = 'Pasta';
    searchYelp(defaultSearchTerm);
  }, []);

  const searchYelp = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'san jose'
        }
      });

      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage('Something went wrong! Please try again later');
    }
  };

  return [searchYelp, results, errorMessage];
};
