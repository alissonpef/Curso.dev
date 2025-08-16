function status(request, response) {
  response.status(200).json({ chave: "Aluno do curso.dev" });
}

export default status;
