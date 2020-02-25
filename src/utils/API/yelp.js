import axios from 'axios';

//axios configuration
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Nm1jbiB-bqfD4x62BG_cx9fvD-eVwKh2MTrJboxNjKjti31KKJL2WPffnPCTh_9i62LlEXDa-jQQSoRxxkNJDgz5NUqRzhllqFMX_9xVwSUc7kBFW_zqJmtnPgRSXnYx'
  }
});
