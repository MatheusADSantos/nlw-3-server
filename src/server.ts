import express from 'express'; //framework em node que ajuda nos a li dar com as requisiçÕes e respostas ...

const app = express();

app.get('/users', (request, response) => {
  return response.json({message: 'Hello World'});
});

app.listen(3333);

