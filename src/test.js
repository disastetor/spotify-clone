import axios from 'axios';
const user = 'john.doe@test.com';
const psw = 'Test123456!!';
const fetchData = async () => {
  try {
    const res = await axios.post(
      '/login',
      {
        email: user,
        password: psw,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const fetchSongsData = async () => {
  try {
    await axios.get('/songs').then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

export default fetchSongsData;
