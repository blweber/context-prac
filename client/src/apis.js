import axios from 'axios';

// Fetch all activities
export const fetchAllActivities = () => {
    return fetchAllActivitiesAsync()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

async function fetchAllActivitiesAsync() {
  try {
    const response = await axios.get(`http://localhost:5000/activities`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}
