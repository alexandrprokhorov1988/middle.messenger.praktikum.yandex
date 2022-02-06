const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static(path.resolve('dist')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
