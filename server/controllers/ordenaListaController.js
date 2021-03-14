const ordenaLista = (req, res) => {
  //Validação
  if (!req.body.listas.salaN || !req.body.listas.salaS) {
    res.status(400);
    return res.send({ success: false, msg: 'Todos os campos são obrigatórios.' });
  }

  //Transforma String em Array
  const salaN = req.body.listas.salaN.split(',').map(el => Number(el));
  const salaS = req.body.listas.salaS.split(/\s*,\s*/); //RegEx para espaços e vírgulas antes das letras

  const ordenadoSalaN = salaN.sort((a, b) => a - b);
  const ordenadoSalaS = salaS.sort();

  req.body.listas.salaN = ordenadoSalaN;
  req.body.listas.salaS = ordenadoSalaS;

  return res.send(req.body);
}

module.exports = ordenaLista;
