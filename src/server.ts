import express from 'express'; //framework em node que ajuda nos a li dar com as requisiçÕes e respostas ...

const app = express();

app.use(express.json());

// Rota - conjunto
// Recurso = usuário

//request - é tudo que precisa enviar
//response - é a resposta

//Métodos HTTP = GET, POST, PUT, DELETE - Ex:
//GET - Buscar info. 
//POST - Criando uma info.
//PUT - Editando info.
//DELETE - Deletar uma info.

//Parâmetros - Ex:
//Query Params: http://localhost:3333/users?search=matheus=2
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users/ (Identificar um recurso)

app.post('/users/:id', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);

  return response.json({message: 'Hello World'});
});

app.listen(3333);

