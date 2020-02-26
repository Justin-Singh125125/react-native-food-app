import axios from 'axios';

export default {
  getYelpRestuarants: term => {
    return axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization:
          'Bearer Nm1jbiB-bqfD4x62BG_cx9fvD-eVwKh2MTrJboxNjKjti31KKJL2WPffnPCTh_9i62LlEXDa-jQQSoRxxkNJDgz5NUqRzhllqFMX_9xVwSUc7kBFW_zqJmtnPgRSXnYx'
      },
      params: {
        limit: 50,
        term: term,
        location: 'sacramento'
      }
    });
  }
};
