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
    //when user sends request, empty out array to look like loading
    setResults([]);
    try {
      const response = await yelp.getYelpRestuarants(term);
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage('Something went wrong! Please try again later');
    }
  };

  return [searchYelp, results, errorMessage];
};
