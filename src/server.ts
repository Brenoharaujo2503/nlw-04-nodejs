import express from 'express';

const app = express();

/** Metodos HTTP
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
*/

/**
 * 1 param => Rota(Recurso API)
 * 2 param => request, response
*/
app.get("/", (request, response) => {
    //Enviando uma mensagem para o cliente(FrontEnd)
    //return response.send("Hello World - NLW04")

    //enviando um json para o cliente(FrontEnd)
    return response.json({ message: "Hello World - NLW04" })
})

app.post("/", (request, response) => {
    // Recebeu dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!" })
})

//Subindo servidor em http://localhost:3333
app.listen(3333, () => console.log("Server is running!"));

// #rumoaoproximonivel