import axios from 'axios';

const fetchData = async () => {
  try {
    axios
      .post('/songs')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
