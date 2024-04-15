import http from "http";

const PORT = 3000;

const routes = {
  "/": "Curso de Express API - 3266",
  '/livros': "Listagem de livros",
  '/autores': "Listagem de autores"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
