const interlace = (req, res) => {
  const { intervaloA, intervaloB } = JSON.parse(req.query.intervalos);

  //Validação
  if (!intervaloA || !intervaloB) {
    res.status(400);
    return res.send({ success: false, msg: 'Todos os campos são obrigatórios.' });
  }

  //Transforma String em Array
  const arrIntervaloA = intervaloA.split(',').map(el => Number(el));
  const arrIntervaloB = intervaloB.split(',').map(el => Number(el));

  if (arrIntervaloA[0] < arrIntervaloB[0]) {
    return res.send(arrIntervaloA[1] >= arrIntervaloB[0]);
  } else {
    return res.send(arrIntervaloB[1] >= arrIntervaloA[0]);
  }
}

module.exports = interlace;
