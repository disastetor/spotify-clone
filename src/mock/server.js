import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import artists from './artists.json';
import albums from './albums.json';
import songs from './songs.json';
import user from './users.json';

const mock = new MockAdapter(axios, {
  delayResponse: 100,
  onNoMatch: 'throwException',
});

mock
  .onPost('/login', {
    email: 'john.doe@test.com',
    password: 'Test123456!!',
  })
  .reply(200, {
    token_type: 'Bearer',
    expires_in: 86400,
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIzfQ.8HSWFxb2lQj3bZVjGcL1vH1DBESmivBZApDeQKMCkco',
  });

mock.onGet('/user-info').reply(200, user);

mock.onGet('/artists').reply(200, {
  artists,
});

mock.onGet('/albums').reply(200, {
  albums,
});

mock.onGet('/songs').reply(200, {
  songs,
});
