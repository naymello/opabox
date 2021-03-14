const express = require('express');
const cors = require('cors');

const app = express();

const interlaceRoutes = require('./routes/interlaceRoutes');
const ordenaListaRoutes = require('./routes/ordenaListaRoutes');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/interlace', interlaceRoutes);
app.use('/ordenaLista', ordenaListaRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor rodando na port ${PORT}`));
